import { ShieldCheck, CircleDollarSign, Clock, ThumbsUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
const features = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    title: "Terdaftar Kemenag",
    description: "Izin resmi PPIU No. 123/2024. Ibadah aman dan nyaman tanpa was-was."
  },
  {
    icon: <CircleDollarSign className="w-10 h-10 text-primary" />,
    title: "Harga Terbaik",
    description: "Paket hemat berkualitas dengan fasilitas hotel dekat masjid."
  },
  {
    icon: <Clock className="w-10 h-10 text-primary" />,
    title: "Berpengalaman",
    description: "Lebih dari 10 tahun melayani ribuan jamaah ke Tanah Suci."
  },
  {
    icon: <ThumbsUp className="w-10 h-10 text-primary" />,
    title: "Pelayanan 24/7",
    description: "Tim support siap membantu kebutuhan Anda sebelum dan saat di Tanah Suci."
  }
];
export default function WhyChooseUs() {
  return (
    <section id="keunggulan" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">Mengapa Memilih Kami?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Komitmen kami untuk memberikan pelayanan terbaik bagi kelancaran ibadah Anda.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 text-center space-y-4">
                <div className="flex justify-center">
                  <div className="p-3 bg-blue-100 rounded-full">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
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