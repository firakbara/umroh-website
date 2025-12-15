"use client";
import { useState, useEffect } from "react";
import { X, Gift, Clock, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useModal } from "@/context/ModalContext";

export default function PromoPopup() {
    const { openModal } = useModal();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Munculkan popup setelah 3 detik
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="bg-gradient-to-br from-blue-50 via-white to-blue-50 rounded-2xl shadow-2xl max-w-lg w-full relative overflow-hidden animate-in fade-in zoom-in duration-500">

                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_50%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(147,51,234,0.1),transparent_50%)]"></div>

                {/* Tombol Close */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-all shadow-lg hover:shadow-xl"
                >
                    <X className="w-5 h-5 text-gray-700" />
                </button>

                {/* Sparkles Decoration */}
                <div className="absolute top-6 left-6 animate-pulse">
                    <Sparkles className="w-6 h-6 text-yellow-400" />
                </div>
                <div className="absolute top-10 right-16 animate-pulse delay-300">
                    <Star className="w-5 h-5 text-yellow-400" />
                </div>

                {/* Header dengan Gradient */}
                <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 shadow-lg">
                        <Gift className="w-8 h-8 text-blue-600" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-2">
                        Promo Spesial! 🎉
                    </h2>
                    <p className="text-blue-100 text-lg">
                        Penawaran Terbatas Bulan Ini
                    </p>
                </div>

                {/* Konten */}
                <div className="relative p-8 space-y-6">
                    {/* Promo Badge */}
                    <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-lg text-center shadow-lg transform -rotate-1">
                        <p className="text-sm font-semibold uppercase tracking-wide">Diskon Hingga</p>
                        <p className="text-4xl font-black">Rp 5 JUTA</p>
                    </div>

                    {/* Benefits */}
                    <div className="space-y-3">
                        <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm border border-blue-100">
                            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-blue-600 text-sm">✓</span>
                            </div>
                            <div>
                                <p className="font-semibold text-gray-900">Cashback Rp 5 Juta</p>
                                <p className="text-sm text-gray-600">Untuk pendaftaran hari ini</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm border border-purple-100">
                            <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-purple-600 text-sm">✓</span>
                            </div>
                            <div>
                                <p className="font-semibold text-gray-900">Gratis Perlengkapan Umroh</p>
                                <p className="text-sm text-gray-600">Tas koper + mukena premium</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm border border-orange-100">
                            <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Clock className="w-4 h-4 text-orange-600" />
                            </div>
                            <div>
                                <p className="font-semibold text-gray-900">Cicilan 0% Tersedia</p>
                                <p className="text-sm text-gray-600">Tanpa bunga s/d 12 bulan</p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-2">
                        <Button
                            className="w-full text-lg h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all"
                            onClick={() => {
                                setIsOpen(false);
                                openModal("Halo, saya ingin klaim Promo Cashback 5 Juta untuk pendaftaran hari ini!");
                            }}
                        >
                            <Gift className="w-5 h-5 mr-2" />
                            Klaim Promo Sekarang
                        </Button>

                        <p className="text-center text-xs text-gray-500 mt-3">
                            ⏰ Promo terbatas! Hubungi kami segera
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}