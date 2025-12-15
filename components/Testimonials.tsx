import { Star } from "lucide-react";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const reviews = [
    {
        name: "Hj. Siti Aminah",
        role: "Jamaah 2024",
        image: "/images/testimonial-1.png",
        content: "Alhamdulillah pelayanan sangat memuaskan. Hotelnya benar-benar dekat dengan Masjidil Haram.",
        rating: 5
    },
    {
        name: "Bpk. Rahmat Hidayat",
        role: "Jamaah 2023",
        image: "/images/testimonial-2.png",
        content: "Tour leadernya sangat membimbing. Ibadah jadi terasa khusyuk dan lancar. Terima kasih Berkah Umroh.",
        rating: 5
    },
    {
        name: "Ibu Nurul Hasanah",
        role: "Jamaah Umroh Plus Turki",
        image: "/images/testimonial-3.png",
        content: "Perjalanan yang luar biasa. Makanan enak, bus nyaman, dan jadwalnya tertata rapi.",
        rating: 4
    }
];
export default function Testimonials() {
    return (
        <section id="testimoni" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900">Kata Mereka</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Pengalaman nyata dari para jamaah yang telah berangkat bersama kami.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <Card key={index} className="bg-slate-50 border-none shadow-sm">
                            <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                    <Image
                                        src={review.image}
                                        alt={review.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">{review.name}</h4>
                                    <p className="text-sm text-gray-500">{review.role}</p>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-4 h-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                                        />
                                    ))}
                                </div>
                                <p className="text-gray-700 italic">"{review.content}"</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}