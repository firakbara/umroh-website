"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useModal } from "@/context/ModalContext";
export default function Hero() {
    const { openModal } = useModal();
    return (
        <section className="relative h-[600px] flex items-center justify-center text-center text-white">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{
                    // Gambar sementara dari Unsplash (Kabah)
                    backgroundImage: 'url("/images/hero-background.png")',
                }}
            >
                <div className="absolute inset-0 bg-black/60" /> {/* Lapisan hitam transparan agar teks terbaca */}
            </div>
            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    Wujudkan Impian Ibadah Anda <br /> ke Tanah Suci
                </h1>
                <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                    Dapatkan pengalaman ibadah Umroh yang nyaman, aman, dan terjangkau bersama Berkah Umroh Indonesia.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                    <Link href="#paket">
                        <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6">
                            Lihat Paket
                        </Button>
                    </Link>
                    <Button
                        variant="outline"
                        size="lg"
                        className="w-full sm:w-auto text-lg px-8 py-6 bg-transparent text-white border-white hover:bg-white hover:text-primary"
                        onClick={() => openModal("Halo, saya tertarik dengan informasi paket Umroh.")}
                    >
                        Chat WhatsApp
                    </Button>
                </div>
            </div>
        </section>
    );
}