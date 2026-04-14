import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="bg-paper py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-sm overflow-hidden shadow-2xl min-h-[320px] sm:min-h-[400px] lg:min-h-[480px]">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
              alt="Lüks İç Mekan"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gray-900/50 mix-blend-multiply" />
          </div>

          <div className="relative z-10 px-6 py-16 sm:px-12 sm:py-24 lg:px-20 lg:py-32 max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-[1px] bg-gold" />
              <span className="text-gold font-medium tracking-widest uppercase text-sm">
                Premium Koleksiyon
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6 text-shadow-sm">
              Evinize Değer Katan <br />
              <span className="italic font-light text-gold">Lüks Dokunuşlar</span>
            </h1>
            <p className="text-lg text-gray-100 mb-10 max-w-xl font-light leading-relaxed">
              Birinci sınıf malzemeler ve kusursuz işçilikle üretilen duvar
              panellerimizle, yaşam alanlarınızı prestijli bir görünüme kavuşturun.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="bg-gold hover:bg-gold-dark text-white px-8 py-4 rounded-sm font-medium text-lg transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                Ürünleri İncele
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button
                type="button"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-sm font-medium text-lg transition-colors flex items-center justify-center"
              >
                Kataloğu İndir
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
