"use client";

import { useState } from "react";
import GarmentGrid, { type Garment } from "./components/GarmentGrid";
import PhotoUploader from "./components/PhotoUploader";
import ResultView from "./components/ResultView";
import garments from "@/data/garments.json";

type Status = "idle" | "loading" | "done" | "error";

export default function Home() {
  const [selectedGarments, setSelectedGarments] = useState<Garment[]>([]);
  const [personFile, setPersonFile] = useState<File | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [loadingMsg, setLoadingMsg] = useState("");
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [originalUrl, setOriginalUrl] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const canGenerate =
    selectedGarments.length > 0 && personFile !== null && status !== "loading";

  const handleToggleGarment = (garment: Garment) => {
    setSelectedGarments((prev) => {
      const exists = prev.find((g) => g.id === garment.id);
      if (exists) return prev.filter((g) => g.id !== garment.id);
      if (prev.length >= 2) return prev;
      if (prev.some((g) => g.category === garment.category)) return prev;
      return [...prev, garment];
    });
  };

  const handleGenerate = async () => {
    if (selectedGarments.length === 0 || !personFile) return;

    setStatus("loading");
    setErrorMsg(null);
    setOriginalUrl(URL.createObjectURL(personFile));

    try {
      let currentPhoto: File | Blob = personFile;

      for (let i = 0; i < selectedGarments.length; i++) {
        const garment = selectedGarments[i];
        setLoadingMsg(
          selectedGarments.length > 1
            ? `Aplicando prenda ${i + 1} de ${selectedGarments.length}: ${garment.name}...`
            : `Generando con ${garment.name}...`
        );

        const formData = new FormData();
        formData.append("garmentId", garment.id);
        formData.append("personPhoto", currentPhoto);

        const res = await fetch("/api/tryon", {
          method: "POST",
          body: formData,
        });

        if (!res.ok) {
          const data = await res.json().catch(() => null);
          throw new Error(data?.error ?? "Error al generar la imagen.");
        }

        const data = await res.json();

        // If there's another garment to apply, download the result as a Blob
        if (i < selectedGarments.length - 1) {
          const imgRes = await fetch(data.resultUrl);
          if (!imgRes.ok) throw new Error("Error al procesar imagen intermedia.");
          currentPhoto = await imgRes.blob();
        } else {
          setResultUrl(data.resultUrl);
        }
      }

      setStatus("done");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Error inesperado.");
      setStatus("error");
    }
  };

  const handleReset = () => {
    setSelectedGarments([]);
    setPersonFile(null);
    setStatus("idle");
    setLoadingMsg("");
    setResultUrl(null);
    setOriginalUrl(null);
    setErrorMsg(null);
  };

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8 text-center">
        <h1 className="text-2xl font-bold">Probador Virtual</h1>
        <p className="text-zinc-500 mt-1">
          Selecciona hasta 2 prendas, sube tu foto y prueba cómo te quedan
        </p>
      </header>

      {status === "done" && resultUrl && originalUrl ? (
        <ResultView
          originalUrl={originalUrl}
          resultUrl={resultUrl}
          onReset={handleReset}
        />
      ) : (
        <div className="space-y-8">
          <GarmentGrid
            garments={garments}
            selected={selectedGarments}
            onToggle={handleToggleGarment}
          />

          <PhotoUploader file={personFile} onFileChange={setPersonFile} />

          {/* Generate button */}
          <div className="text-center">
            <button
              onClick={handleGenerate}
              disabled={!canGenerate}
              className={`px-8 py-3 rounded-lg font-semibold text-white transition-colors ${
                canGenerate
                  ? "bg-blue-600 hover:bg-blue-700 cursor-pointer"
                  : "bg-zinc-300 cursor-not-allowed"
              }`}
            >
              {status === "loading"
                ? "Generando..."
                : selectedGarments.length > 1
                ? `Generar con ${selectedGarments.length} prendas`
                : "Generar"}
            </button>
          </div>

          {/* Loading state */}
          {status === "loading" && (
            <div className="text-center py-8">
              <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-r-transparent mb-3" />
              <p className="text-zinc-600">{loadingMsg}</p>
              <p className="text-sm text-zinc-400 mt-1">
                {selectedGarments.length > 1
                  ? "Esto puede tardar hasta 2 minutos con 2 prendas"
                  : "Esto puede tardar hasta un minuto"}
              </p>
            </div>
          )}

          {/* Error state */}
          {status === "error" && errorMsg && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
              <p className="text-red-700">{errorMsg}</p>
              <button
                onClick={() => {
                  setStatus("idle");
                  setErrorMsg(null);
                }}
                className="mt-2 text-sm text-red-600 underline hover:text-red-800 cursor-pointer"
              >
                Intentar de nuevo
              </button>
            </div>
          )}
        </div>
      )}
    </main>
  );
}
