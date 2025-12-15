"use client";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import Image from "next/image";
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="bg-white rounded-lg shadow-2xl max-w-md w-full relative overflow-hidden animate-in fade-in zoom-in duration-300">

                {/* Tombol Close */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-3 right-3 z-10 p-2 bg-white rounded-full hover:bg-gray-100 transition-colors shadow-lg"
                >
                    <X className="w-5 h-5 text-gray-700" />
                </button>
                {/* Gambar Promo */}
                <div className="h-40 relative">
                    <Image
                        src="/images/promo-banner.png"
                        alt="Promo Banner"
                        fill
                        className="object-cover"
                    />
                </div>
                {/* Konten */}
                <div className="p-6 text-center space-y-4">
                    <h2 className="text-2xl font-bold text-primary">Promo Spesial Ramadhan!</h2>
                    <p className="text-gray-600">
                        Dapatkan diskon **Rp 2 Juta** untuk pendaftaran bulan ini. Kuota terbatas!
                    </p>
                    <div className="pt-2">
                        <Button className="w-full text-lg" onClick={() => {
                            setIsOpen(false);
                            openModal("Halo, saya ingin klaim Promo Spesial Ramadhan (Diskon 2 Juta).");
                        }}>
                            Klaim Promo Sekarang
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}