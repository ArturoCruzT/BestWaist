import { NextRequest, NextResponse } from "next/server";
import Replicate from "replicate";
import { readFile } from "fs/promises";
import path from "path";
import sharp from "sharp";
import garments from "@/data/garments.json";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

const TRYON_VERSION =
  process.env.REPLICATE_TRYON_VERSION ??
  "5c6712b51ff45af53bba0e88d4a5ec33fad0a85de32462e3d3cbcf51b53d5d37";

// Model's expected dimensions
const MODEL_WIDTH = 768;
const MODEL_HEIGHT = 1024;

/**
 * Pad image to 3:4 ratio (768x1024) with white letterbox,
 * preserving original proportions. Returns the padded buffer
 * and the crop info needed to restore the original framing.
 */
async function padToModelRatio(inputBuffer: Buffer) {
  const metadata = await sharp(inputBuffer).metadata();
  const origW = metadata.width ?? MODEL_WIDTH;
  const origH = metadata.height ?? MODEL_HEIGHT;
  const origRatio = origW / origH;
  const targetRatio = MODEL_WIDTH / MODEL_HEIGHT; // 0.75

  let resizeW: number;
  let resizeH: number;
  let padTop = 0;
  let padBottom = 0;
  let padLeft = 0;
  let padRight = 0;

  if (origRatio > targetRatio) {
    // Image is wider than 3:4 → fit width, pad top/bottom
    resizeW = MODEL_WIDTH;
    resizeH = Math.round(MODEL_WIDTH / origRatio);
    const totalPad = MODEL_HEIGHT - resizeH;
    padTop = Math.floor(totalPad / 2);
    padBottom = totalPad - padTop;
  } else if (origRatio < targetRatio) {
    // Image is taller than 3:4 → fit height, pad left/right
    resizeH = MODEL_HEIGHT;
    resizeW = Math.round(MODEL_HEIGHT * origRatio);
    const totalPad = MODEL_WIDTH - resizeW;
    padLeft = Math.floor(totalPad / 2);
    padRight = totalPad - padLeft;
  } else {
    // Already 3:4
    resizeW = MODEL_WIDTH;
    resizeH = MODEL_HEIGHT;
  }

  const padded = await sharp(inputBuffer)
    .resize(resizeW, resizeH, { fit: "fill" })
    .extend({
      top: padTop,
      bottom: padBottom,
      left: padLeft,
      right: padRight,
      background: { r: 255, g: 255, b: 255 },
    })
    .jpeg({ quality: 95 })
    .toBuffer();

  return {
    buffer: padded,
    crop: { top: padTop, left: padLeft, width: resizeW, height: resizeH },
  };
}

/**
 * Crop the model output back to the original framing,
 * removing the letterbox padding.
 */
async function cropToOriginal(
  resultBuffer: Buffer,
  crop: { top: number; left: number; width: number; height: number }
) {
  // The result is MODEL_WIDTH x MODEL_HEIGHT; extract the original region
  return sharp(resultBuffer)
    .extract({
      top: crop.top,
      left: crop.left,
      width: crop.width,
      height: crop.height,
    })
    .jpeg({ quality: 95 })
    .toBuffer();
}

function bufferToDataUri(buffer: Buffer, mime: string): string {
  return `data:${mime};base64,${buffer.toString("base64")}`;
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const garmentId = formData.get("garmentId") as string | null;
    const personPhoto = formData.get("personPhoto") as File | null;

    if (!garmentId || !personPhoto) {
      return NextResponse.json(
        { error: "Faltan datos: se requiere garmentId y personPhoto." },
        { status: 400 }
      );
    }

    const garment = garments.find((g) => g.id === garmentId);
    if (!garment) {
      return NextResponse.json(
        { error: "Prenda no encontrada." },
        { status: 404 }
      );
    }

    // Read garment image
    const garmentPath = path.join(process.cwd(), "public", "garments", garment.file);
    const garmentBuffer = await readFile(garmentPath);

    // Read person photo
    const personArrayBuffer = await personPhoto.arrayBuffer();
    const personBuffer = Buffer.from(personArrayBuffer);

    // Pre-process: pad person photo to 3:4 with letterbox
    const { buffer: paddedPerson, crop } = await padToModelRatio(personBuffer);

    console.log(
      `Pre-process: original → padded to ${MODEL_WIDTH}x${MODEL_HEIGHT}, ` +
      `crop region: top=${crop.top} left=${crop.left} ${crop.width}x${crop.height}`
    );

    // Call Replicate
    const garmentUri = bufferToDataUri(garmentBuffer, "image/jpeg");
    const personUri = bufferToDataUri(paddedPerson, "image/jpeg");

    const prediction = await replicate.predictions.create({
      version: TRYON_VERSION,
      input: {
        garm_img: garmentUri,
        human_img: personUri,
        category: garment.category,
        garment_des: garment.description,
        steps: 30,
      },
    });

    // Poll until complete
    let result = await replicate.predictions.get(prediction.id);
    while (
      result.status !== "succeeded" &&
      result.status !== "failed" &&
      result.status !== "canceled"
    ) {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      result = await replicate.predictions.get(prediction.id);
    }

    if (result.status !== "succeeded" || !result.output) {
      console.error("Replicate prediction failed:", result.error ?? result.status);
      return NextResponse.json(
        { error: "La generación falló. Intenta con otra foto." },
        { status: 500 }
      );
    }

    // Get result URL
    let outputUrl: string;
    if (typeof result.output === "string") {
      outputUrl = result.output;
    } else if (Array.isArray(result.output) && result.output.length > 0) {
      outputUrl = String(result.output[0]);
    } else {
      outputUrl = String(result.output);
    }

    // Post-process: download result and crop back to original proportions
    const resultResponse = await fetch(outputUrl);
    if (!resultResponse.ok) {
      throw new Error("Error al descargar resultado de Replicate.");
    }
    const resultBuffer = Buffer.from(await resultResponse.arrayBuffer());
    const croppedBuffer = await cropToOriginal(resultBuffer, crop);

    // Return cropped image as base64 data URI
    const finalUri = bufferToDataUri(croppedBuffer, "image/jpeg");

    return NextResponse.json({ resultUrl: finalUri });
  } catch (err) {
    console.error("Error en /api/tryon:", err);
    return NextResponse.json(
      { error: "Ocurrió un error al generar la imagen. Intenta de nuevo." },
      { status: 500 }
    );
  }
}
