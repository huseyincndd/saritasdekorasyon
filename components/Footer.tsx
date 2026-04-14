import Image from "next/image";
import Link from "next/link";
import { Share2, Camera, AtSign, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white text-ink flex items-center justify-center font-display font-bold text-2xl rounded-sm">
                S
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-2xl leading-none tracking-tight text-white">
                  SARITAŞ
                </span>
                <span className="text-[11px] uppercase tracking-[0.2em] text-gray-400 font-medium mt-1">
                  Dekorasyon
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Yapı malzemeleri, PVC panel ve lambiri çözümlerinde sektörün öncü
              markası. Lüksü ve kaliteyi yaşam alanlarınıza taşıyoruz.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <span className="sr-only">Facebook</span>
                <Share2 className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <span className="sr-only">Instagram</span>
                <Camera className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <span className="sr-only">X (Twitter)</span>
                <AtSign className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-6 text-gold">Hızlı Linkler</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Hakkımızda
                </a>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-gold transition-colors text-sm"
                >
                  Ürünlerimiz
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Sıkça Sorulan Sorular
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Kargo ve Teslimat
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  İade Şartları
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-6 text-gold">Kategoriler</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-gold transition-colors text-sm"
                >
                  Duvar Panelleri
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-gold transition-colors text-sm"
                >
                  Zemin Kaplama
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-gold transition-colors text-sm"
                >
                  Tavan Çözümleri
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-gold transition-colors text-sm"
                >
                  Lambiri Çeşitleri
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-gold transition-colors text-sm">
                  Aksesuarlar
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg mb-6 text-gold">İletişim</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="h-5 w-5 text-gold shrink-0" />
                <span>
                  Organize Sanayi Bölgesi, 1. Cadde No: 45
                  <br />
                  Merkez / Türkiye
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="h-5 w-5 text-gold shrink-0" />
                <span>+90 (850) 123 45 67</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="h-5 w-5 text-gold shrink-0" />
                <span>info@saritasdekorasyon.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {year} Sarıtaş Dekorasyon Ürünleri. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-4 items-center">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png"
              alt="PayPal"
              width={48}
              height={19}
              className="h-6 w-auto opacity-50 grayscale hover:grayscale-0 transition-all"
            />
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1200px-Mastercard-logo.svg.png"
              alt="Mastercard"
              width={36}
              height={22}
              className="h-6 w-auto opacity-50 grayscale hover:grayscale-0 transition-all"
            />
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png"
              alt="Visa"
              width={48}
              height={16}
              className="h-6 w-auto opacity-50 grayscale hover:grayscale-0 transition-all"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
