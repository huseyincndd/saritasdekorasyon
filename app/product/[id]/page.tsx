import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetailView from "@/components/ProductDetailView";
import { PRODUCTS, getProductById } from "@/lib/products";

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(Number(id));
  if (!product) {
    return { title: "Ürün bulunamadı | Sarıtaş" };
  }
  return {
    title: `${product.name} | Sarıtaş Dekorasyon`,
    description: product.description.slice(0, 160),
  };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const numeric = Number(id);
  if (!Number.isFinite(numeric)) {
    notFound();
  }
  const product = getProductById(numeric);
  if (!product) {
    notFound();
  }
  return <ProductDetailView key={product.id} product={product} />;
}
