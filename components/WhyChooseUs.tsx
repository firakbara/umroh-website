"use client";
import { ShieldCheck, CircleDollarSign, Clock, ThumbsUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: ShieldCheck,
    title: "Terdaftar Kemenag",
    description: "Izin resmi PPIU No. 123/2024. Ibadah aman dan nyaman tanpa was-was.",
  },
  {
    icon: CircleDollarSign,
    title: "Harga Terbaik",
    description: "Paket hemat berkualitas dengan fasilitas hotel dekat masjid.",
  },
  {
    icon: Clock,
    title: "Berpengalaman",
    description: "Lebih dari 10 tahun melayani ribuan jamaah ke Tanah Suci.",
  },
  {
    icon: ThumbsUp,
    title: "Pelayanan 24/7",
    description: "Tim support siap membantu kebutuhan Anda sebelum dan saat di Tanah Suci.",
  }
];

export default function WhyChooseUs() {
  return (
    <section id="keunggulan" className="relative py-24 bg-slate-50 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-sky-100 rounded-full blur-3xl opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
            Keunggulan Kami
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Mengapa Memilih Kami?
          </h2>

          <p className="text-gray-600 max-w-xl mx-auto">
            Komitmen kami untuk memberikan pelayanan terbaik bagi kelancaran ibadah Anda
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                className="group border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white"
              >
                <CardContent className="pt-8 pb-6 text-center space-y-4">
                  {/* Icon */}
                  <div className="flex justify-center">
                    <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                      <IconComponent className="w-7 h-7 text-blue-600" />
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h3>

                  <p className="text-gray-500 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
