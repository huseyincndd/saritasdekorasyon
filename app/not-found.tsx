import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-24 text-center">
      <h1 className="font-display text-4xl font-bold text-ink mb-4">Sayfa bulunamadı</h1>
      <p className="text-gray-600 mb-8 max-w-md">
        Aradığınız sayfa taşınmış veya silinmiş olabilir.
      </p>
      <Link
        href="/"
        className="rounded-sm bg-ink px-8 py-3 text-white font-medium transition-colors hover:bg-gold"
      >
        Ana sayfaya dön
      </Link>
    </div>
  );
}
