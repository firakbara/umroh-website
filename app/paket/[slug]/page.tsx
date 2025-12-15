import { packages } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Hotel, Plane, Clock, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import BookButton from "@/components/BookButton";
import OrderForm from "@/components/OrderForm"; // Reuse form order di bawah (opsional)
export async function generateStaticParams() {
    return packages.map((pkg) => ({
        slug: pkg.slug,
    }));
}
export default async function PackageDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const pkg = packages.find((p) => p.slug === slug);
    if (!pkg) {
        return <div className="text-center py-20">Paket tidak ditemukan</div>;
    }
    return (
        <main className="min-h-screen bg-slate-50 pb-20">
            {/* Header Gambar */}
            <div className="relative h-[400px]">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${pkg.image})` }}
                >
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <div className="relative container mx-auto px-4 h-full flex flex-col justify-end pb-12 text-white">
                    <div className="flex gap-4 mb-4">
                        <span className="bg-primary px-3 py-1 rounded-full text-sm font-bold">{pkg.duration} Hari</span>
                        <span className="bg-green-600 px-3 py-1 rounded-full text-sm font-bold">Available</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-2">{pkg.title}</h1>
                    <p className="text-2xl font-semibold text-yellow-400">{pkg.price}</p>
                </div>
            </div>
            <div className="container mx-auto px-4 mt-8 relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Kolom Kiri: Detail Info */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Card Info Utama */}
                    <Card>
                        <CardContent className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex items-center gap-3">
                                <Calendar className="w-8 h-8 text-primary" />
                                <div>
                                    <p className="text-sm text-gray-500">Keberangkatan</p>
                                    <p className="font-semibold">{pkg.date}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Hotel className="w-8 h-8 text-primary" />
                                <div>
                                    <p className="text-sm text-gray-500">Hotel</p>
                                    <p className="font-semibold">{pkg.hotel}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <Plane className="w-8 h-8 text-primary" />
                                <div>
                                    <p className="text-sm text-gray-500">Maskapai</p>
                                    <p className="font-semibold">{pkg.maskapai}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    {/* Deskripsi & Fasilitas */}
                    <div className="bg-white p-8 rounded-lg shadow-sm space-y-6">
                        <h3 className="text-2xl font-bold text-gray-900">Deskripsi Paket</h3>
                        <p className="text-gray-600 leading-relaxed">
                            {pkg.description}
                        </p>
                        <h3 className="text-2xl font-bold text-gray-900 pt-4">Fasilitas Termasuk</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {pkg.facilities.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Kolom Kanan: Sticky CTA */}
                <div className="space-y-6">
                    <Card className="sticky top-24">
                        <CardContent className="p-6 space-y-6">
                            <div className="text-center space-y-2">
                                <p className="text-sm text-gray-500">Mulai dari</p>
                                <p className="text-3xl font-bold text-primary">{pkg.price}</p>
                                <p className="text-xs text-gray-400">per pax / orang</p>
                            </div>

                            <BookButton title={pkg.title} />
                            <p className="text-center text-xs text-gray-400">
                                Klik tombol di atas untuk terhubung dengan CS kami.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </main>
    );
}