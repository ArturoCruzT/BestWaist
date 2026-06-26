# Probador Virtual — Prototipo

Prototipo de probador virtual de prendas con IA usando [IDM-VTON](https://replicate.com/cuuupid/idm-vton) en Replicate.

## Requisitos

- Node.js 18+
- Cuenta en [Replicate](https://replicate.com) con créditos

## Setup

1. Instala dependencias:

```bash
npm install
```

2. Copia el archivo de variables de entorno y agrega tu token:

```bash
cp .env.local.example .env.local
```

Edita `.env.local` y pega tu token de Replicate (lo encuentras en https://replicate.com/account/api-tokens).

3. Agrega imágenes de prendas en `public/garments/` (al menos las que están en `garments.json`).

4. Corre el proyecto:

```bash
npm run dev
```

Abre http://localhost:3000.

## Agregar una prenda nueva

1. Pon la imagen (JPG o PNG) en `public/garments/`.
2. Agrega una entrada en `data/garments.json`:

```json
{
  "id": "mi-prenda",
  "name": "Mi prenda nueva",
  "category": "upper_body",
  "description": "Descripción corta de la prenda",
  "file": "mi-prenda.jpg"
}
```

Categorías válidas: `upper_body`, `lower_body`, `dresses`.

3. Reinicia el servidor (`npm run dev`).

## Notas

- El modelo `cuuupid/idm-vton` tiene licencia no-comercial. Es válido para pruebas.
- La generación tarda entre 20 y 60 segundos.
- Las fotos funcionan mejor de cuerpo completo, de frente, con fondo claro.
