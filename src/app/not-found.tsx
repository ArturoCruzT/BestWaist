import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-black text-brand-yellow mb-4">404</h1>
      <h2 className="text-2xl font-bold mb-4">Página no encontrada</h2>
      <p className="text-gray-400 mb-8 max-w-md">
        La página que buscas no existe o fue movida. Regresa al inicio para
        ver nuestros productos.
      </p>
      <Link href="/" className="btn-primary">
        Volver al inicio
      </Link>
    </main>
  )
}
