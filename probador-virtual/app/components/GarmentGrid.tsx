"use client";

import Image from "next/image";

export interface Garment {
  id: string;
  name: string;
  category: string;
  description: string;
  file: string;
}

interface GarmentGridProps {
  garments: Garment[];
  selected: Garment[];
  onToggle: (garment: Garment) => void;
}

const CATEGORY_LABEL: Record<string, string> = {
  upper_body: "Superior",
  lower_body: "Inferior",
  dresses: "Vestido",
};

export default function GarmentGrid({
  garments,
  selected,
  onToggle,
}: GarmentGridProps) {
  const selectedIds = new Set(selected.map((g) => g.id));
  const selectedCategories = new Set(selected.map((g) => g.category));

  const isDisabled = (g: Garment) => {
    if (selectedIds.has(g.id)) return false; // can always deselect
    if (selected.length >= 2) return true; // max 2
    if (selectedCategories.has(g.category)) return true; // same category blocked
    return false;
  };

  return (
    <section>
      <h2 className="text-lg font-semibold mb-1">
        1. Selecciona hasta 2 prendas
      </h2>
      <p className="text-sm text-zinc-500 mb-3">
        Puedes combinar una prenda superior con una inferior
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {garments.map((g) => {
          const active = selectedIds.has(g.id);
          const disabled = isDisabled(g);
          return (
            <button
              key={g.id}
              onClick={() => !disabled && onToggle(g)}
              className={`rounded-xl overflow-hidden border-2 transition-all text-left ${
                active
                  ? "border-blue-600 ring-2 ring-blue-300 shadow-lg"
                  : disabled
                  ? "border-zinc-100 opacity-40 cursor-not-allowed"
                  : "border-zinc-200 hover:border-zinc-400 cursor-pointer"
              }`}
            >
              <div className="relative aspect-square bg-zinc-100">
                <Image
                  src={`/garments/${g.file}`}
                  alt={g.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, 33vw"
                />
                {active && (
                  <div className="absolute top-2 right-2 bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                    {selected.findIndex((s) => s.id === g.id) + 1}
                  </div>
                )}
              </div>
              <div className="p-3">
                <p className="font-medium text-sm">{g.name}</p>
                <p className="text-xs text-zinc-500 mt-1">
                  {CATEGORY_LABEL[g.category] ?? g.category}
                  {" · "}
                  {g.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
