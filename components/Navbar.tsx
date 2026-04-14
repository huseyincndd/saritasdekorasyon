import Link from "next/link";
import { ShoppingCart, Search, User, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="bg-ink text-white py-2.5 px-4 text-center text-xs sm:text-sm font-medium tracking-wide">
        <span className="text-gold">📦 Türkiye Geneline</span> Hızlı ve Güvenli
        Teslimat
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link href="/" className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
            <div className="w-12 h-12 bg-ink text-gold flex items-center justify-center font-display font-bold text-2xl rounded-sm">
              S
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-2xl leading-none tracking-tight text-ink">
                SARITAŞ
              </span>
              <span className="text-[11px] uppercase tracking-[0.2em] text-gray-500 font-medium mt-1">
                Dekorasyon
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link
              href="/products"
              className="text-sm font-medium text-ink hover:text-gold transition-colors"
            >
              Tüm Ürünler
            </Link>
            <Link
              href="/products"
              className="text-sm font-medium text-ink hover:text-gold transition-colors"
            >
              Duvar Panelleri
            </Link>
            <Link
              href="/products"
              className="text-sm font-medium text-ink hover:text-gold transition-colors"
            >
              Zemin Kaplama
            </Link>
            <Link
              href="/products"
              className="text-sm font-medium text-ink hover:text-gold transition-colors"
            >
              Tavan Çözümleri
            </Link>
          </nav>

          <div className="flex items-center space-x-4 sm:space-x-6">
            <button
              type="button"
              className="text-ink hover:text-gold transition-colors flex items-center gap-2"
            >
              <Search className="w-5 h-5" />
              <span className="hidden lg:block text-sm font-medium">Ara</span>
            </button>
            <button
              type="button"
              className="text-ink hover:text-gold transition-colors hidden sm:flex items-center gap-2"
            >
              <User className="w-5 h-5" />
              <span className="hidden lg:block text-sm font-medium">Giriş Yap</span>
            </button>
            <button
              type="button"
              className="flex items-center gap-2 bg-paper border border-gray-200 px-4 py-2 rounded-sm hover:border-gold transition-colors group"
            >
              <ShoppingCart className="w-5 h-5 text-ink group-hover:text-gold transition-colors" />
              <span className="text-sm font-medium text-ink">Sepetim</span>
              <span className="bg-gold text-white text-xs font-bold px-2 py-0.5 rounded-full ml-1">
                0
              </span>
            </button>
            <button type="button" className="md:hidden text-ink" aria-label="Menü">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
