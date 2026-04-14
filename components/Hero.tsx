import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative flex min-h-[85svh] w-full flex-col items-center justify-center overflow-hidden bg-ink sm:min-h-[600px] lg:min-h-[800px]">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Lüks İç Mekan"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-ink/10" />
      </div>

      <div className="relative z-10 w-full max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="flex max-w-3xl flex-col items-start">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-gold sm:w-16" />
            <span className="text-xs font-bold tracking-[0.2em] text-gold uppercase sm:text-sm">
              Sarıtaş Dekorasyon
            </span>
          </div>

          <h1 className="mb-6 font-display text-[2.5rem] font-bold leading-[1.1] text-white drop-shadow-lg sm:text-6xl lg:text-7xl">
            Yaşam Alanlarınıza <br />
            <span className="font-light italic text-gold">Lüks Bir Dokunuş</span>
          </h1>

          <p className="mb-10 max-w-xl text-base font-light leading-relaxed text-gray-200 drop-shadow-md sm:text-lg sm:leading-loose lg:text-xl">
            Türkiye&apos;nin dört bir yanına birinci sınıf malzemeler ve kusursuz işçilikle üretilen premium duvar ve tavan panelleri ulaştırıyoruz.
          </p>

          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <Link
              href="/products"
              className="group flex w-full items-center justify-center gap-3 rounded-sm bg-gold px-8 py-4 text-base font-bold text-white shadow-[0_0_40px_rgba(197,160,89,0.3)] transition-all hover:bg-gold-dark hover:shadow-[0_0_60px_rgba(197,160,89,0.5)] sm:w-auto sm:px-10 sm:py-5 sm:text-lg"
            >
              Koleksiyonu Keşfet
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <button
              type="button"
              className="flex w-full items-center justify-center rounded-sm border border-white/20 bg-white/5 px-8 py-4 text-base font-medium text-white backdrop-blur-xl transition-all hover:bg-white/10 sm:w-auto sm:px-10 sm:py-5 sm:text-lg"
            >
              Kataloğu İndir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
