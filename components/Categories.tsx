import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Duvar Panelleri",
    imageSrc:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Zemin Kaplama",
    imageSrc:
      "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Tavan Çözümleri",
    imageSrc:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Lambiri Çeşitleri",
    imageSrc:
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
];

export default function Categories() {
  return (
    <div className="bg-paper py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col items-center text-center sm:mb-12">
          <span className="mb-2 text-xs font-medium tracking-widest text-gold uppercase sm:mb-3 sm:text-sm">
            Koleksiyonlar
          </span>
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">Kategorileri Keşfedin</h2>
          <div className="mt-4 h-[1px] w-24 bg-gold sm:mt-6" />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-8">
          {categories.map((category, idx) => (
            <Link
              key={idx}
              href="/products"
              className="group relative block h-64 overflow-hidden rounded-sm shadow-md outline-none focus-visible:ring-2 focus-visible:ring-gold sm:h-80 md:h-96"
            >
              <Image
                src={category.imageSrc}
                alt={category.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col items-center text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-display font-bold text-2xl text-white mb-3">{category.name}</h3>
                <span className="text-gold text-sm font-medium uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  İncele &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
