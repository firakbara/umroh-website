"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useModal } from "@/context/ModalContext";
import { Plane, Hotel, Users, CreditCard, Send, Check, ArrowRight } from "lucide-react";

export default function Hero() {
    const { openModal } = useModal();

    const features = [
        { icon: Plane, label: "Direct Flight" },
        { icon: Hotel, label: "Hotel Bintang 5" },
        { icon: Users, label: "Muthawwif Berpengalaman" },
        { icon: CreditCard, label: "Cicilan 0%" },
    ];

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image - More Visible */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{
                    backgroundImage: 'url("/images/hero-background.png")',
                }}
            />

            {/* Gradient Overlay - Less Opaque for Better Image Visibility */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-blue-800/80 to-blue-700/75"></div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 py-20">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Promo Badge - Clean Design */}
                    <div className="flex justify-center mb-8">
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/15 backdrop-blur-sm rounded-full text-white font-medium border border-white/20">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                            <span>Promo Cashback Rp 5 Juta</span>
                        </div>
                    </div>

                    {/* Title - Clean Typography */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white">
                        Wujudkan Impian Ibadah
                        <br />
                        <span className="text-sky-300">ke Tanah Suci</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Dapatkan pengalaman ibadah Umroh yang nyaman, aman, dan terjangkau bersama Berkah Umroh Indonesia.
                    </p>

                    {/* Feature Pills - Clean with Icons */}
                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 px-4 py-2.5 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/20"
                            >
                                <feature.icon className="w-4 h-4 text-sky-300" />
                                <span>{feature.label}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTA Buttons - Professional Design */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link href="#paket" className="w-full sm:w-auto">
                            <Button
                                size="lg"
                                className="w-full sm:w-auto text-base px-8 py-6 bg-white text-blue-700 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 font-semibold rounded-xl"
                            >
                                Lihat Paket Umroh
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </Link>

                        <Button
                            variant="outline"
                            size="lg"
                            className="w-full sm:w-auto text-base px-8 py-6 bg-transparent text-white border-2 border-white/40 hover:bg-white/10 shadow-lg transition-all duration-300 font-semibold rounded-xl"
                            onClick={() => openModal("Halo, saya tertarik dengan promo cashback 5 juta dan ingin info paket Umroh.")}
                        >
                            <Send className="w-5 h-5 mr-2" />
                            Chat WhatsApp
                        </Button>
                    </div>

                    {/* Trust Badges - Clean Design */}
                    <div className="mt-16 pt-8 border-t border-white/10">
                        <div className="flex flex-wrap justify-center items-center gap-8 text-white/70">
                            <div className="flex items-center gap-2">
                                <Check className="w-5 h-5 text-green-400" />
                                <span className="text-sm font-medium">Terdaftar Kemenag</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Check className="w-5 h-5 text-green-400" />
                                <span className="text-sm font-medium">10+ Tahun Pengalaman</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Check className="w-5 h-5 text-green-400" />
                                <span className="text-sm font-medium">1000+ Jamaah Puas</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}