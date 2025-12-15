"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useModal } from "@/context/ModalContext";
import { Sparkles, Star, Send, Check } from "lucide-react";

export default function Hero() {
    const { openModal } = useModal();

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800 animate-gradient-xy"></div>

            {/* Animated Mesh Gradient Overlay */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
                <div className="absolute top-0 -right-4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${5 + Math.random() * 10}s`,
                        }}
                    />
                ))}
            </div>

            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center opacity-20"
                style={{
                    backgroundImage: 'url("/images/hero-background.png")',
                }}
            />

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 py-20">
                <div className="max-w-5xl mx-auto">
                    {/* Glassmorphism Card */}
                    <div className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 md:p-16 shadow-2xl border border-white/20 transform hover:scale-[1.02] transition-transform duration-500">
                        {/* Floating Badge */}
                        <div className="flex justify-center mb-8 animate-bounce-slow">
                            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full text-white font-semibold shadow-lg shadow-yellow-500/50">
                                <Sparkles className="w-5 h-5 animate-spin-slow" />
                                <span>Promo Cashback 5 Juta</span>
                                <Star className="w-5 h-5 animate-pulse" />
                            </div>
                        </div>

                        {/* Title with Gradient */}
                        <h1 className="text-4xl md:text-7xl font-black leading-tight mb-6 text-center">
                            <span className="bg-gradient-to-r from-white via-blue-100 to-sky-100 bg-clip-text text-transparent animate-gradient-x drop-shadow-2xl">
                                Wujudkan Impian Ibadah
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-sky-100 via-cyan-100 to-white bg-clip-text text-transparent animate-gradient-x-reverse drop-shadow-2xl">
                                ke Tanah Suci
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto text-center mb-8 leading-relaxed font-light">
                            Dapatkan pengalaman ibadah Umroh yang{" "}
                            <span className="font-semibold text-cyan-300">nyaman</span>,{" "}
                            <span className="font-semibold text-sky-300">aman</span>, dan{" "}
                            <span className="font-semibold text-blue-300">terjangkau</span>{" "}
                            bersama Berkah Umroh Indonesia.
                        </p>

                        {/* Feature Pills */}
                        <div className="flex flex-wrap justify-center gap-3 mb-10">
                            {[
                                "✈️ Direct Flight",
                                "🏨 Hotel Bintang 5",
                                "👨‍🏫 Muthawwif Berpengalaman",
                                "💰 Cicilan 0%",
                            ].map((feature, index) => (
                                <div
                                    key={index}
                                    className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-110"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    {feature}
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link href="#paket" className="w-full sm:w-auto">
                                <Button
                                    size="lg"
                                    className="w-full sm:w-auto text-lg px-10 py-7 bg-gradient-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 shadow-2xl shadow-blue-500/50 hover:shadow-blue-600/60 transition-all duration-300 hover:scale-105 font-bold rounded-xl border-2 border-white/20"
                                >
                                    <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
                                    Lihat Paket Umroh
                                </Button>
                            </Link>

                            <Button
                                variant="outline"
                                size="lg"
                                className="w-full sm:w-auto text-lg px-10 py-7 bg-white/10 backdrop-blur-md text-white border-2 border-white/40 hover:bg-white hover:text-blue-600 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-bold rounded-xl group"
                                onClick={() => openModal("Halo, saya tertarik dengan promo cashback 5 juta dan ingin info paket Umroh.")}
                            >
                                <Send className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                                Chat WhatsApp
                            </Button>
                        </div>

                        {/* Trust Badges */}
                        <div className="mt-12 pt-8 border-t border-white/20">
                            <div className="flex flex-wrap justify-center items-center gap-6 text-white/80">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-green-500/30 rounded-full flex items-center justify-center">
                                        <Check className="w-5 h-5 text-green-300" />
                                    </div>
                                    <span className="text-sm font-medium">Terdaftar Kemenag</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-blue-500/30 rounded-full flex items-center justify-center">
                                        <Check className="w-5 h-5 text-blue-300" />
                                    </div>
                                    <span className="text-sm font-medium">10+ Tahun Pengalaman</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-sky-500/30 rounded-full flex items-center justify-center">
                                        <Check className="w-5 h-5 text-sky-300" />
                                    </div>
                                    <span className="text-sm font-medium">1000+ Jamaah Puas</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Gradient Orbs */}
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse-slow animation-delay-2000"></div>
        </section>
    );
}