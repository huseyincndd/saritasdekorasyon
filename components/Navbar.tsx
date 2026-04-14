"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ShoppingCart, Search, User, Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[100] w-full transition-all duration-300 ${
          scrolled ? "bg-white/95 shadow-md backdrop-blur-xl" : "bg-white"
        }`}
      >
        {/* Top Banner */}
        <div
          className={`flex items-center justify-center overflow-hidden bg-ink text-center text-xs font-medium tracking-wide text-white transition-all duration-300 sm:text-sm ${
            scrolled ? "h-0 opacity-0" : "h-10 opacity-100"
          }`}
        >
          <span className="px-3">
            <span className="text-gold">📦 Türkiye Geneline</span> Hızlı ve Güvenli Teslimat
          </span>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className={`flex min-w-0 items-center justify-between gap-4 transition-all duration-300 ${
              scrolled ? "h-16 sm:h-20" : "h-20 sm:h-24"
            }`}
          >
            <Link
              href="/"
              className="relative z-[120] flex min-w-0 shrink items-center gap-3"
              onClick={() => setMobileOpen(false)}
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-ink font-display text-xl font-bold text-gold sm:h-12 sm:w-12 sm:text-2xl">
                S
              </div>
              <div className="min-w-0 flex flex-col">
                <span className="truncate font-display text-lg font-bold leading-none tracking-tight text-ink sm:text-2xl">
                  SARITAŞ
                </span>
                <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.2em] text-gray-500 sm:text-[11px]">
                  Dekorasyon
                </span>
              </div>
            </Link>

            {/* Masaüstü Menü */}
            <nav className="hidden space-x-8 md:flex">
              {["Tüm Ürünler", "Duvar Panelleri", "Zemin Kaplama", "Tavan Çözümleri"].map((item) => (
                <Link
                  key={item}
                  href="/products"
                  className="text-sm font-medium text-ink transition-colors hover:text-gold"
                >
                  {item}
                </Link>
              ))}
            </nav>

            <div className="flex shrink-0 items-center gap-2 sm:gap-4 md:gap-6">
              <button
                type="button"
                className="hidden text-ink transition-colors hover:text-gold sm:flex sm:items-center sm:gap-2"
              >
                <Search className="h-5 w-5" />
                <span className="hidden text-sm font-medium lg:inline">Ara</span>
              </button>
              <button
                type="button"
                className="hidden text-ink transition-colors hover:text-gold sm:flex sm:items-center sm:gap-2"
              >
                <User className="h-5 w-5" />
                <span className="hidden text-sm font-medium lg:inline">Giriş</span>
              </button>
              <button
                type="button"
                className="relative z-[120] group flex h-10 items-center justify-center gap-1.5 rounded-sm border border-gray-200 bg-paper px-3 transition-colors hover:border-gold sm:h-11 sm:gap-2 sm:px-4"
              >
                <ShoppingCart className="h-5 w-5 shrink-0 text-ink transition-colors group-hover:text-gold" />
                <span className="hidden text-sm font-medium text-ink sm:inline">Sepetim</span>
                <span className="flex h-5 items-center justify-center rounded-full bg-gold px-1.5 text-[10px] font-bold text-white sm:ml-1">
                  0
                </span>
              </button>
              <button
                type="button"
                className="relative z-[120] flex h-10 w-10 shrink-0 items-center justify-center rounded-sm text-ink transition-colors hover:bg-paper md:hidden"
                aria-label="Menüyü aç"
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((o) => !o)}
              >
                {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobil Tam Ekran Menü */}
        <div
          className={`fixed inset-0 -z-10 flex flex-col bg-white pt-[120px] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
            mobileOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="flex flex-1 flex-col overflow-y-auto px-6 pb-8">
            <nav className="flex flex-col pt-4">
              {[
                { href: "/", label: "Ana Sayfa" },
                { href: "/products", label: "Tüm Ürünler" },
                { href: "/products", label: "Duvar Panelleri" },
                { href: "/products", label: "Zemin Kaplama" },
                { href: "/products", label: "Tavan Çözümleri" },
              ].map((item, i) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="group flex items-center justify-between border-b border-gray-100 py-5 font-display text-2xl font-bold text-ink transition-colors hover:text-gold"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  {item.label}
                  <ArrowRight className="h-5 w-5 text-gray-300 transition-transform group-hover:translate-x-2 group-hover:text-gold" />
                </Link>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-3 pt-10">
              <button
                type="button"
                className="flex w-full items-center justify-center gap-3 rounded-sm border border-gray-200 bg-paper py-4 text-base font-medium text-ink transition-colors hover:border-gold hover:bg-gold hover:text-white"
              >
                <Search className="h-5 w-5 shrink-0" />
                Ürün Ara
              </button>
              <button
                type="button"
                className="flex w-full items-center justify-center gap-3 rounded-sm border border-ink bg-ink py-4 text-base font-medium text-white transition-colors hover:border-gold hover:bg-gold"
              >
                <User className="h-5 w-5 shrink-0" />
                Giriş Yap / Üye Ol
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Fixed header yüksekliğini doldurmak için boşluk */}
      <div className="h-[120px] sm:h-[136px]" />
    </>
  );
}
