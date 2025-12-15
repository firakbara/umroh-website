"use client";
import { Star, Quote } from "lucide-react";
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
        rating: 5
    }
];

export default function Testimonials() {
    return (
        <section id="testimoni" className="relative py-24 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
            {/* Decorative Blobs */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-16 space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-semibold text-sm">
                        <Star className="w-4 h-4 fill-current" />
                        Testimoni
                    </div>

                    <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                        Kata{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                            Jamaah Kami
                        </span>
                    </h2>

                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Pengalaman nyata dari para jamaah yang telah berangkat bersama kami
                    </p>
                </div>

                {/* Testimonial Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <Card
                            key={index}
                            className="group bg-white border-2 border-transparent hover:border-blue-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Quote Icon Background */}
                            <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Quote className="w-24 h-24 text-blue-600" />
                            </div>

                            <CardHeader className="flex flex-row items-center gap-4 pb-4 relative z-10">
                                {/* Avatar with Ring */}
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-sky-400 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                                    <div className="relative w-14 h-14 rounded-full overflow-hidden ring-4 ring-white shadow-lg">
                                        <Image
                                            src={review.image}
                                            alt={review.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                        {review.name}
                                    </h4>
                                    <p className="text-sm text-gray-500">{review.role}</p>
                                </div>
                            </CardHeader>

                            <CardContent className="space-y-4 relative z-10">
                                {/* Stars with Glow */}
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-5 h-5 transition-all ${i < review.rating
                                                    ? "fill-yellow-400 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]"
                                                    : "text-gray-300"
                                                }`}
                                        />
                                    ))}
                                </div>

                                {/* Review Content */}
                                <p className="text-gray-700 leading-relaxed italic">
                                    "{review.content}"
                                </p>

                                {/* Bottom Decoration */}
                                <div className="pt-4 border-t border-gray-100">
                                    <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-sky-400 rounded-full"></div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}