"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { PRODUCTS } from "@/lib/products";

export default function ProductGrid() {
  const [activeTab, setActiveTab] = useState("Tümü");
  const tabs = ["Tümü", "Duvar Panelleri", "Lambiri", "Zemin Kaplama", "Tavan Çözümleri"];

  const filteredProducts =
    activeTab === "Tümü" ? PRODUCTS : PRODUCTS.filter((p) => p.category === activeTab);

  return (
    <div className="bg-white py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <span className="text-gold font-medium tracking-widest uppercase text-sm mb-3">
            Seçkin Ürünler
          </span>
          <h2 className="text-3xl font-display font-bold text-ink sm:text-4xl">Öne Çıkanlar</h2>
          <div className="w-24 h-[1px] bg-gold mt-6 mb-6 sm:mb-10" />

          <div className="w-full max-w-full">
            <div className="scrollbar-hide -mx-4 flex snap-x snap-mandatory gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:gap-3 sm:overflow-visible sm:px-0 sm:pb-0">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`shrink-0 snap-start rounded-sm border px-4 py-2.5 text-sm font-medium whitespace-nowrap transition-all sm:px-6 ${
                    activeTab === tab
                      ? "border-ink bg-ink text-white shadow-md"
                      : "border-gray-200 bg-white text-gray-600 hover:border-gold hover:text-gold"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-gray-200 rounded-sm overflow-hidden hover:shadow-2xl transition-all duration-300 group flex flex-col"
            >
              <Link
                href={`/product/${product.id}`}
                className="relative aspect-[4/3] bg-gray-100 overflow-hidden block"
              >
                <Image
                  src={product.imageSrc}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {product.isNew && (
                  <div className="absolute top-4 left-4 bg-gold text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest rounded-sm shadow-sm z-10">
                    Yeni
                  </div>
                )}
              </Link>
              <div className="p-6 flex flex-col flex-grow text-center">
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-3">
                  {product.category}
                </p>
                <Link href={`/product/${product.id}`} className="hover:text-gold transition-colors">
                  <h3 className="text-lg font-display font-bold text-ink mb-4 line-clamp-2 min-h-[3.5rem]">
                    {product.name}
                  </h3>
                </Link>
                <div className="mt-auto mb-6">
                  <span className="text-2xl font-bold text-ink">{product.price}</span>
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  className="w-full bg-paper border border-gray-200 text-ink py-3.5 rounded-sm font-medium flex items-center justify-center gap-2 group-hover:bg-gold group-hover:text-white group-hover:border-gold transition-colors"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Sepete Ekle
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16 text-gray-500 font-medium">
            Bu kategoride henüz ürün bulunmamaktadır.
          </div>
        )}
      </div>
    </div>
  );
}
