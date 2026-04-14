"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Filter, ChevronRight } from "lucide-react";
import { PRODUCTS } from "@/lib/products";

const categories = [
  "Tüm Ürünler",
  "Duvar Panelleri",
  "Lambiri",
  "Zemin Kaplama",
  "Tavan Çözümleri",
];

export default function ShopView() {
  const [activeCategory, setActiveCategory] = useState("Tüm Ürünler");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProducts =
    activeCategory === "Tüm Ürünler"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-paper min-h-screen py-6 sm:py-8 md:py-12">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center text-xs text-gray-400 sm:mb-8 sm:text-sm">
          <Link href="/" className="shrink-0 hover:text-gold transition-colors">
            Ana Sayfa
          </Link>
          <ChevronRight className="mx-1.5 h-4 w-4 shrink-0 sm:mx-2" />
          <span className="min-w-0 truncate text-ink">Koleksiyonlar</span>
        </div>

        {/* Mobil: yatay kaydırmalı kategori şeridi */}
        <div className="mb-6 lg:hidden">
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-gray-500">
            Kategori
          </p>
          <div className="scrollbar-hide -mx-3 flex snap-x snap-mandatory gap-2 overflow-x-auto px-3 pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`snap-start shrink-0 rounded-full border px-4 py-2.5 text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? "border-ink bg-ink text-gold shadow-md"
                    : "border-gray-200 bg-white text-gray-700 hover:border-gold"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
          {/* Masaüstü: yan panel */}
          <div className="hidden w-full lg:block lg:w-1/4">
            <div className="sticky top-28 rounded-sm border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-6 flex items-center gap-2 border-b border-gray-100 pb-4">
                <Filter className="h-5 w-5 text-gold" />
                <h2 className="font-display text-lg font-bold text-ink">Kategoriler</h2>
              </div>
              <ul className="space-y-2">
                {categories.map((cat) => (
                  <li key={cat}>
                    <button
                      type="button"
                      onClick={() => setActiveCategory(cat)}
                      className={`flex w-full items-center justify-between rounded-sm px-3 py-2.5 text-left text-sm transition-all ${
                        activeCategory === cat
                          ? "bg-ink font-medium text-gold shadow-md"
                          : "text-gray-600 hover:bg-paper hover:text-ink"
                      }`}
                    >
                      {cat}
                      {activeCategory === cat && <ChevronRight className="h-4 w-4" />}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="min-w-0 w-full lg:w-3/4">
            <div className="mb-6 flex flex-col gap-3 sm:mb-8 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <h1 className="font-display text-2xl font-bold text-ink sm:text-3xl">
                {activeCategory}
              </h1>
              <span className="inline-flex w-fit items-center rounded-sm border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-500 shadow-sm sm:text-sm">
                {filteredProducts.length} ürün listeleniyor
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group flex flex-col overflow-hidden rounded-sm border border-gray-200 bg-white transition-all duration-300 hover:shadow-2xl"
                >
                  <Link
                    href={`/product/${product.id}`}
                    className="relative block aspect-[4/3] overflow-hidden bg-gray-100"
                  >
                    <Image
                      src={product.imageSrc}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {product.isNew && (
                      <div className="absolute top-3 left-3 z-10 rounded-sm bg-gold px-2.5 py-1 text-[10px] font-bold tracking-widest text-white uppercase shadow-sm sm:top-4 sm:left-4 sm:px-3 sm:py-1.5">
                        Yeni
                      </div>
                    )}
                  </Link>
                  <div className="flex flex-grow flex-col p-4 text-center sm:p-5">
                    <p className="mb-1.5 text-[10px] tracking-widest text-gray-400 uppercase sm:mb-2 sm:text-xs">
                      {product.category}
                    </p>
                    <Link
                      href={`/product/${product.id}`}
                      className="hover:text-gold transition-colors"
                    >
                      <h3 className="font-display line-clamp-2 min-h-[2.75rem] text-base font-bold text-ink sm:min-h-[3rem]">
                        {product.name}
                      </h3>
                    </Link>
                    <div className="mt-auto mb-4">
                      <span className="text-lg font-bold text-ink sm:text-xl">{product.price}</span>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      className="flex w-full items-center justify-center gap-2 rounded-sm border border-gray-200 bg-paper py-2.5 text-sm font-medium text-ink transition-colors group-hover:border-gold group-hover:bg-gold group-hover:text-white sm:py-3"
                    >
                      <ShoppingCart className="h-4 w-4" />
                      Sepete Ekle
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="rounded-sm border border-gray-200 bg-white py-16 text-center font-medium text-gray-500 shadow-sm sm:py-20">
                Bu kategoride henüz ürün bulunmamaktadır.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
