"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";

interface PhotoUploaderProps {
  file: File | null;
  onFileChange: (file: File | null) => void;
}

export default function PhotoUploader({
  file,
  onFileChange,
}: PhotoUploaderProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFile = useCallback(
    (f: File | null) => {
      if (f && !f.type.startsWith("image/")) {
        alert("Solo se aceptan archivos de imagen.");
        return;
      }
      onFileChange(f);
      if (f) {
        const url = URL.createObjectURL(f);
        setPreview((prev) => {
          if (prev) URL.revokeObjectURL(prev);
          return url;
        });
      } else {
        setPreview((prev) => {
          if (prev) URL.revokeObjectURL(prev);
          return null;
        });
      }
    },
    [onFileChange]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragOver(false);
      const f = e.dataTransfer.files[0] ?? null;
      handleFile(f);
    },
    [handleFile]
  );

  return (
    <section>
      <h2 className="text-lg font-semibold mb-3">2. Sube tu foto</h2>

      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        className={`relative border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors ${
          dragOver
            ? "border-blue-500 bg-blue-50"
            : "border-zinc-300 hover:border-zinc-400"
        }`}
      >
        {preview ? (
          <div className="flex flex-col items-center gap-3">
            <div className="relative w-48 h-64 mx-auto">
              <Image
                src={preview}
                alt="Tu foto"
                fill
                className="object-contain rounded-lg"
                sizes="192px"
              />
            </div>
            <p className="text-sm text-zinc-600">{file?.name}</p>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleFile(null);
              }}
              className="text-sm text-red-600 hover:text-red-800 underline"
            >
              Quitar foto
            </button>
          </div>
        ) : (
          <div className="py-8">
            <svg
              className="mx-auto h-12 w-12 text-zinc-400 mb-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M12 16v-8m0 0l-3 3m3-3l3 3M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-zinc-600">
              Arrastra una foto aquí o{" "}
              <span className="text-blue-600 font-medium">
                haz clic para seleccionar
              </span>
            </p>
            <p className="text-xs text-zinc-400 mt-2">
              Foto de cuerpo completo, de frente, con fondo claro
            </p>
          </div>
        )}

        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
        />
      </div>
    </section>
  );
}
