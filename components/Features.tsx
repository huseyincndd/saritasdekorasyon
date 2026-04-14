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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center pt-8 sm:pt-0 first:pt-0 px-4"
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
