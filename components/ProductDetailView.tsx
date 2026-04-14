"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShoppingCart,
  Heart,
  ShieldCheck,
  Truck,
  ArrowLeft,
  Star,
  Ruler,
  Wrench,
} from "lucide-react";
import type { Product } from "@/lib/products";

type Props = {
  product: Product;
};

export default function ProductDetailView({ product }: Props) {
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product.id]);

  return (
    <div className="bg-paper min-h-screen py-6 sm:py-8 md:py-12">
      <div className="mx-auto max-w-7xl min-w-0 px-3 sm:px-6 lg:px-8">
        <div className="mb-6 flex min-w-0 flex-col gap-3 sm:mb-8 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/products"
            className="inline-flex min-w-0 items-center text-sm font-medium text-gray-500 hover:text-gold transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4 shrink-0" />
            <span className="truncate">Ürünlere dön</span>
          </Link>
          <div className="hidden min-w-0 items-center text-sm text-gray-400 sm:flex">
            <Link href="/" className="shrink-0 hover:text-gold transition-colors">
              Ana Sayfa
            </Link>
            <span className="mx-2 shrink-0">/</span>
            <Link href="/products" className="min-w-0 truncate hover:text-gold transition-colors">
              {product.category}
            </Link>
            <span className="mx-2 shrink-0">/</span>
            <span className="max-w-[min(40vw,12rem)] truncate text-ink md:max-w-[200px]">
              {product.name}
            </span>
          </div>
        </div>

        <div className="overflow-hidden rounded-sm border border-gray-100 bg-white shadow-xl">
          <div className="flex flex-col lg:flex-row">
            <div className="border-b border-gray-100 p-4 sm:p-8 lg:w-1/2 lg:border-r lg:border-b-0 lg:p-10">
              <div className="relative aspect-[4/3] sm:aspect-square rounded-sm overflow-hidden mb-6 bg-gray-50">
                <Image
                  src={product.images[activeImage] ?? product.imageSrc}
                  alt={product.name}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {product.isNew && (
                  <div className="absolute top-4 left-4 bg-gold text-white text-xs font-bold px-4 py-2 uppercase tracking-widest rounded-sm shadow-md z-10">
                    Yeni Sezon
                  </div>
                )}
              </div>
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImage(idx)}
                    className={`relative aspect-square rounded-sm overflow-hidden border-2 transition-all ${
                      activeImage === idx
                        ? "border-gold opacity-100"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} küçük görsel ${idx + 1}`}
                      fill
                      className="object-cover"
                      sizes="33vw"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col p-4 sm:p-8 lg:w-1/2 lg:p-10">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-gold font-medium tracking-widest uppercase text-xs">
                  {product.category}
                </span>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-gold fill-gold" />
                  <span className="text-sm font-medium text-ink">{product.rating}</span>
                  <span className="text-sm text-gray-400">
                    ({product.reviewCount} Değerlendirme)
                  </span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl font-display font-bold text-ink leading-tight mb-4">
                {product.name}
              </h1>

              <div className="flex items-end gap-4 mb-8">
                <span className="text-4xl font-bold text-ink">{product.price}</span>
                <span className="text-lg text-gray-400 line-through mb-1">
                  {product.originalPrice}
                </span>
              </div>

              <p className="text-gray-600 font-light leading-relaxed mb-8">{product.description}</p>

              <div className="bg-paper border border-gray-200 rounded-sm p-4 mb-8 flex items-center gap-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                  <Ruler className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-1">
                    Ölçüler
                  </h4>
                  <p className="text-sm font-medium text-ink">{product.dimensions}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <div className="flex items-center border border-gray-300 rounded-sm bg-white h-14 w-full sm:w-32">
                  <button
                    type="button"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-full flex items-center justify-center text-gray-500 hover:text-ink transition-colors"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value, 10) || 1))}
                    className="w-full h-full text-center font-bold text-ink bg-transparent focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-full flex items-center justify-center text-gray-500 hover:text-ink transition-colors"
                  >
                    +
                  </button>
                </div>
                <button
                  type="button"
                  className="flex-1 bg-ink hover:bg-gold text-white h-14 rounded-sm font-medium text-lg transition-colors flex items-center justify-center gap-3 shadow-lg"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Sepete Ekle
                </button>
                <button
                  type="button"
                  className="w-14 h-14 flex items-center justify-center border border-gray-300 rounded-sm text-gray-400 hover:text-red-500 hover:border-red-500 transition-colors bg-white"
                >
                  <Heart className="w-6 h-6" />
                </button>
              </div>

              <div className="mt-auto border-t border-gray-100 pt-8">
                <h3 className="font-display font-bold text-lg text-ink mb-4">Ürün Özellikleri</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                      <ShieldCheck className="w-5 h-5 text-gold shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid min-w-0 grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-3 sm:gap-6">
          <div className="bg-white p-6 rounded-sm border border-gray-100 flex items-center gap-4 shadow-sm">
            <div className="w-12 h-12 bg-paper rounded-full flex items-center justify-center shrink-0">
              <Truck className="w-6 h-6 text-gold" />
            </div>
            <div>
              <h4 className="font-bold text-ink text-sm">Ücretsiz Kargo</h4>
              <p className="text-xs text-gray-500 mt-1">2000 TL üzeri siparişlerde</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-sm border border-gray-100 flex items-center gap-4 shadow-sm">
            <div className="w-12 h-12 bg-paper rounded-full flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-gold" />
            </div>
            <div>
              <h4 className="font-bold text-ink text-sm">Güvenli Alışveriş</h4>
              <p className="text-xs text-gray-500 mt-1">256-bit SSL sertifikası</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-sm border border-gray-100 flex items-center gap-4 shadow-sm">
            <div className="w-12 h-12 bg-paper rounded-full flex items-center justify-center shrink-0">
              <Wrench className="w-6 h-6 text-gold" />
            </div>
            <div>
              <h4 className="font-bold text-ink text-sm">Kolay İade</h4>
              <p className="text-xs text-gray-500 mt-1">14 gün içinde koşulsuz iade</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
