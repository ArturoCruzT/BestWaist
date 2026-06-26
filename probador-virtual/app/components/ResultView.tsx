"use client";

import { useEffect, useRef, useState } from "react";

interface ResultViewProps {
  originalUrl: string;
  resultUrl: string;
  onReset: () => void;
}

export default function ResultView({
  originalUrl,
  resultUrl,
  onReset,
}: ResultViewProps) {
  // Track original image dimensions to match result size
  const originalRef = useRef<HTMLImageElement>(null);
  const [imgStyle, setImgStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      // Use original image's natural aspect ratio for both containers
      setImgStyle({
        aspectRatio: `${img.naturalWidth} / ${img.naturalHeight}`,
        maxHeight: "70vh",
        width: "100%",
        objectFit: "contain",
      });
    };
    img.src = originalUrl;
  }, [originalUrl]);

  const handleDownload = async () => {
    try {
      const res = await fetch(resultUrl);
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `tryon-result-${Date.now()}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch {
      alert("No se pudo descargar la imagen.");
    }
  };

  return (
    <section>
      <h2 className="text-lg font-semibold mb-3">Resultado</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
        <div>
          <p className="text-sm text-zinc-500 mb-2 text-center">Tu foto</p>
          <div className="bg-zinc-100 rounded-xl overflow-hidden flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              ref={originalRef}
              src={originalUrl}
              alt="Foto original"
              style={imgStyle}
              className="rounded-xl"
            />
          </div>
        </div>
        <div>
          <p className="text-sm text-zinc-500 mb-2 text-center">
            Con la prenda
          </p>
          <div className="bg-zinc-100 rounded-xl overflow-hidden flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={resultUrl}
              alt="Resultado try-on"
              style={imgStyle}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-3 mt-6 justify-center">
        <button
          onClick={handleDownload}
          className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium cursor-pointer"
        >
          Descargar resultado
        </button>
        <button
          onClick={onReset}
          className="px-6 py-2.5 border border-zinc-300 rounded-lg hover:bg-zinc-50 transition-colors font-medium cursor-pointer"
        >
          Probar otra vez
        </button>
      </div>
    </section>
  );
}
