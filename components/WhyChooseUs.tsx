"use client";
import { ShieldCheck, CircleDollarSign, Clock, ThumbsUp, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Terdaftar Kemenag",
    description: "Izin resmi PPIU No. 123/2024. Ibadah aman dan nyaman tanpa was-was.",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
  },
  {
    icon: <CircleDollarSign className="w-8 h-8" />,
    title: "Harga Terbaik",
    description: "Paket hemat berkualitas dengan fasilitas hotel dekat masjid.",
    color: "from-blue-500 to-sky-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Berpengalaman",
    description: "Lebih dari 10 tahun melayani ribuan jamaah ke Tanah Suci.",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
  },
  {
    icon: <ThumbsUp className="w-8 h-8" />,
    title: "Pelayanan 24/7",
    description: "Tim support siap membantu kebutuhan Anda sebelum dan saat di Tanah Suci.",
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-50",
  }
];

export default function WhyChooseUs() {
  return (
    <section id="keunggulan" className="relative py-24 bg-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-sky-100 rounded-full blur-3xl opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-semibold text-sm">
            <Zap className="w-4 h-4" />
            Keunggulan Kami
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900">
            Mengapa{" "}
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              Memilih Kami?
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Komitmen kami untuk memberikan pelayanan terbaik bagi kelancaran ibadah Anda
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group border-2 border-transparent hover:border-blue-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-white/80 backdrop-blur-sm relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient Glow on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

              <CardContent className="pt-8 pb-6 text-center space-y-4 relative z-10">
                {/* Icon with Gradient Background */}
                <div className="flex justify-center">
                  <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`w-full h-full rounded-2xl ${feature.bgColor} flex items-center justify-center text-white`}>
                      <div className={`bg-gradient-to-br ${feature.color} bg-clip-text text-transparent`}>
                        {feature.icon}
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}