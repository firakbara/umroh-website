"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, Phone } from "lucide-react";
import { useModal } from "@/context/ModalContext";
export default function Navbar() {
    const { openModal } = useModal();
    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* LOGO */}
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/images/brand-logo.png"
                            alt="Berkah Umroh Logo"
                            width={40}
                            height={40}
                            className="object-contain"
                        />
                        <span className="font-bold text-xl text-primary">Berkah Umroh</span>
                    </Link>
                </div>
                {/* DESKTOP MENU (Hidden on Mobile) */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
                        Beranda
                    </Link>
                    <Link href="#paket" className="text-sm font-medium hover:text-primary transition-colors">
                        Paket Umroh
                    </Link>
                    <Link href="#tentang" className="text-sm font-medium hover:text-primary transition-colors">
                        Tentang Kami
                    </Link>
                    <Link href="#kontak" className="text-sm font-medium hover:text-primary transition-colors">
                        Kontak
                    </Link>
                </div>
                {/* CTA BUTTON & MOBILE MENU */}
                <div className="flex items-center gap-4">
                    {/* Button WA visible on Desktop */}
                    <Button className="hidden md:flex gap-2" onClick={() => openModal()}>
                        <Phone className="w-4 h-4" />
                        Hubungi WA
                    </Button>
                    {/* Mobile Menu Toggle (Simple) */}
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Menu className="w-6 h-6" />
                    </Button>
                </div>
            </div>
        </nav>
    );
}