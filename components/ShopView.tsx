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
    <div className="bg-paper min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-gold transition-colors">
            Ana Sayfa
          </Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-ink">Koleksiyonlar</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="w-full lg:w-1/4">
            <div className="bg-white p-6 rounded-sm border border-gray-200 sticky top-32 shadow-sm">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-100">
                <Filter className="w-5 h-5 text-gold" />
                <h2 className="font-display font-bold text-lg text-ink">Kategoriler</h2>
              </div>
              <ul className="space-y-2">
                {categories.map((cat) => (
                  <li key={cat}>
                    <button
                      type="button"
                      onClick={() => setActiveCategory(cat)}
                      className={`w-full text-left flex items-center justify-between py-2.5 px-3 rounded-sm text-sm transition-all ${
                        activeCategory === cat
                          ? "bg-ink text-gold font-medium shadow-md"
                          : "text-gray-600 hover:bg-paper hover:text-ink"
                      }`}
                    >
                      {cat}
                      {activeCategory === cat && <ChevronRight className="w-4 h-4" />}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full lg:w-3/4">
            <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h1 className="text-3xl font-display font-bold text-ink">{activeCategory}</h1>
              <span className="text-sm text-gray-500 font-medium bg-white px-4 py-2 rounded-sm border border-gray-200 shadow-sm">
                {filteredProducts.length} ürün listeleniyor
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {product.isNew && (
                      <div className="absolute top-4 left-4 bg-gold text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest rounded-sm shadow-sm z-10">
                        Yeni
                      </div>
                    )}
                  </Link>
                  <div className="p-5 flex flex-col flex-grow text-center">
                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">
                      {product.category}
                    </p>
                    <Link
                      href={`/product/${product.id}`}
                      className="hover:text-gold transition-colors"
                    >
                      <h3 className="text-base font-display font-bold text-ink mb-3 line-clamp-2 min-h-[3rem]">
                        {product.name}
                      </h3>
                    </Link>
                    <div className="mt-auto mb-5">
                      <span className="text-xl font-bold text-ink">{product.price}</span>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      className="w-full bg-paper border border-gray-200 text-ink py-3 rounded-sm font-medium text-sm flex items-center justify-center gap-2 group-hover:bg-gold group-hover:text-white group-hover:border-gold transition-colors"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      Sepete Ekle
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20 text-gray-500 font-medium bg-white border border-gray-200 rounded-sm shadow-sm">
                Bu kategoride henüz ürün bulunmamaktadır.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
