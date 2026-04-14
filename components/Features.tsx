import { ShieldCheck, Truck, Wrench, ThumbsUp } from "lucide-react";

const features = [
  { name: "1. Sınıf Kalite", desc: "Uzun ömürlü ve dayanıklı malzemeler", icon: ShieldCheck },
  { name: "Güvenli Teslimat", desc: "Türkiye'nin her yerine sigortalı kargo", icon: Truck },
  { name: "Kolay Kurulum", desc: "Ustaya ihtiyaç duymadan pratik montaj", icon: Wrench },
  { name: "Müşteri Destek", desc: "Satış sonrası kesintisiz hizmet", icon: ThumbsUp },
];

export default function Features() {
  return (
    <div className="bg-white border-y border-gray-200">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-6 divide-y divide-gray-100 sm:grid-cols-2 sm:gap-8 sm:divide-x sm:divide-y-0 lg:grid-cols-4 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center px-2 pt-6 text-center first:pt-0 sm:px-4 sm:pt-0"
            >
              <div className="w-14 h-14 bg-paper rounded-full flex items-center justify-center mb-4 border border-gold/20">
                <feature.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-lg font-display font-bold text-ink mb-2">{feature.name}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
