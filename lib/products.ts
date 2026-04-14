export type Product = {
  id: number;
  name: string;
  category: string;
  price: string;
  originalPrice: string;
  imageSrc: string;
  images: string[];
  description: string;
  features: string[];
  dimensions: string;
  isNew: boolean;
  rating: number;
  reviewCount: number;
};

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Ahşap Görünümlü PVC Duvar Paneli",
    category: "Duvar Panelleri",
    price: "245,00 TL",
    originalPrice: "320,00 TL",
    imageSrc:
      "https://images.unsplash.com/photo-1511401139252-f158d3209c17?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1511401139252-f158d3209c17?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Doğal ahşap dokusunu birebir yansıtan, suya ve neme dayanıklı birinci sınıf PVC duvar paneli. Lüks mekanlar yaratmak için idealdir. Kolay temizlenir, uzun ömürlüdür ve usta gerektirmeden pratik bir şekilde monte edilebilir. Yaşam alanlarınıza sıcak ve prestijli bir atmosfer katar.",
    features: [
      "Suya ve neme %100 dayanıklı",
      "Kolay ve hızlı montaj imkanı",
      "Alev almaz, yangına dayanıklı yapı",
      "Ses ve ısı yalıtımına katkı sağlar",
      "Antibakteriyel ve kolay temizlenebilir yüzey",
    ],
    dimensions: "En: 20 cm | Boy: 290 cm | Kalınlık: 8 mm",
    isNew: true,
    rating: 4.8,
    reviewCount: 124,
  },
  {
    id: 2,
    name: "Mermer Desenli UV Panel",
    category: "Duvar Panelleri",
    price: "320,00 TL",
    originalPrice: "399,00 TL",
    imageSrc:
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511401139252-f158d3209c17?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "UV kaplama ile çizilmeye dayanıklı, mermer desenli premium duvar paneli. Oturma odası ve banyo uyumlu yüzey; parlak ve zamansız bir görünüm sunar.",
    features: [
      "UV dayanımlı yüzey",
      "Neme dayanıklı yapı",
      "Hızlı kilit sistemi ile montaj",
      "Kolay temizlik",
      "Çevre dostu malzeme",
    ],
    dimensions: "En: 25 cm | Boy: 280 cm | Kalınlık: 9 mm",
    isNew: false,
    rating: 4.6,
    reviewCount: 89,
  },
  {
    id: 3,
    name: "Antrasit Gri PVC Lambiri",
    category: "Lambiri",
    price: "185,00 TL",
    originalPrice: "220,00 TL",
    imageSrc:
      "https://images.unsplash.com/photo-1615873968403-89e068629265?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1615873968403-89e068629265?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Modern antrasit tonuyla tavan ve duvar uygulamalarına uygun PVC lambiri. Mat yüzeyi ile parmak izi bırakmaz, uzun ömürlü kullanım sunar.",
    features: [
      "Mat antrasit yüzey",
      "Hafif ve dayanıklı",
      "Kolay taşınır ve kesilir",
      "Nem ve küfe karşı dirençli",
      "Ekonomik çözüm",
    ],
    dimensions: "En: 10 cm | Boy: 300 cm | Kalınlık: 8 mm",
    isNew: false,
    rating: 4.5,
    reviewCount: 56,
  },
  {
    id: 4,
    name: "Beyaz Parlak Tavan Paneli",
    category: "Tavan Çözümleri",
    price: "150,00 TL",
    originalPrice: "189,00 TL",
    imageSrc:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Işığı yansıtan parlak beyaz tavan paneli; mekanları ferah gösterir. Mutfak ve banyo dahil nemli alanlarda güvenle kullanılabilir.",
    features: [
      "Parlak, yansıtıcı yüzey",
      "Kolay silinebilir",
      "Hafif gövde",
      "Standart tavan sistemleriyle uyumlu",
      "Bakım gerektirmez",
    ],
    dimensions: "En: 25 cm | Boy: 400 cm | Kalınlık: 7 mm",
    isNew: true,
    rating: 4.7,
    reviewCount: 201,
  },
  {
    id: 5,
    name: "Ceviz Desenli Zemin Kaplama",
    category: "Zemin Kaplama",
    price: "410,00 TL",
    originalPrice: "479,00 TL",
    imageSrc:
      "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511401139252-f158d3209c17?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Ceviz tonlarında doğal görünümlü zemin kaplama; sıcak ve şık bir atmosfer sağlar. Aşınmaya dayanıklı üst tabaka ile yoğun trafikli alanlara uygundur.",
    features: [
      "Aşınma direnci yüksek",
      "Kolay döşeme",
      "Isı ve ses yalıtımına katkı",
      "Çizilme direnci",
      "Kolay bakım",
    ],
    dimensions: "Plaka: 120 x 20 cm | Kalınlık: 5 mm",
    isNew: false,
    rating: 4.9,
    reviewCount: 42,
  },
  {
    id: 6,
    name: "Akustik Ahşap Duvar Paneli",
    category: "Duvar Panelleri",
    price: "550,00 TL",
    originalPrice: "620,00 TL",
    imageSrc:
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511401139252-f158d3209c17?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Ofis ve yaşam alanları için akustik performans sunan ahşap görünümlü duvar paneli. Ses yansımasını azaltırken estetik bir yüzey sunar.",
    features: [
      "Akustik yüzey yapısı",
      "Yangın sınıfına uygun seçenekler",
      "Modüler montaj",
      "Premium doku",
      "Profesyonel mekanlara uygun",
    ],
    dimensions: "En: 60 cm | Boy: 240 cm | Kalınlık: 12 mm",
    isNew: true,
    rating: 4.8,
    reviewCount: 33,
  },
  {
    id: 7,
    name: "Siyah Mat PVC Lambiri",
    category: "Lambiri",
    price: "195,00 TL",
    originalPrice: "235,00 TL",
    imageSrc:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1615873968403-89e068629265?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Minimal ve cesur bir görünüm için siyah mat PVC lambiri. Tavan çizgilerini belirginleştirir, modern iç mimariye uyar.",
    features: [
      "Mat siyah yüzey",
      "UV stabil",
      "Hızlı montaj profili",
      "Hafif yapı",
      "Uzun ömürlü renk",
    ],
    dimensions: "En: 10 cm | Boy: 300 cm | Kalınlık: 8 mm",
    isNew: false,
    rating: 4.4,
    reviewCount: 71,
  },
  {
    id: 8,
    name: "Altın Çıtalı Duvar Paneli",
    category: "Duvar Panelleri",
    price: "380,00 TL",
    originalPrice: "450,00 TL",
    imageSrc:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ],
    description:
      "Altın çıta detaylarıyla lüks bir vurgu sunan duvar paneli. Salon ve giriş holü gibi alanlarda göz alıcı bir fon oluşturur.",
    features: [
      "Dekoratif metal çıta detayı",
      "Kolay temizlenebilir yüzey",
      "Dayanıklı PVC gövde",
      "Hızlı montaj",
      "Prestijli görünüm",
    ],
    dimensions: "En: 40 cm | Boy: 280 cm | Kalınlık: 10 mm",
    isNew: false,
    rating: 4.7,
    reviewCount: 98,
  },
];

export function getProductById(id: number): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}
