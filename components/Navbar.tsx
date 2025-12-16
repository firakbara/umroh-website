"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Phone, X, Home, Package, Info } from "lucide-react";
import { useModal } from "@/context/ModalContext";

export default function Navbar() {
    const { openModal } = useModal();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

                    {/* Mobile Menu Toggle */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <Menu className="w-6 h-6" />
                    </Button>
                </div>
            </div>

            {/* MOBILE MENU PANEL */}
            {mobileMenuOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/50 z-40 md:hidden"
                        onClick={() => setMobileMenuOpen(false)}
                    />

                    {/* Menu Panel */}
                    <div className="fixed top-0 right-0 h-full w-72 bg-white/80 backdrop-blur-xl shadow-2xl z-50 md:hidden animate-in slide-in-from-right duration-300 border-l border-white/20">
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 border-b border-white/20 bg-white/30">
                            <span className="font-bold text-lg text-primary">Menu</span>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <X className="w-6 h-6" />
                            </Button>
                        </div>

                        <div className="flex flex-col p-4 space-y-4">
                            <Link
                                href="/"
                                className="flex items-center gap-3 text-base font-medium hover:text-primary transition-colors py-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <Home className="w-5 h-5" />
                                Beranda
                            </Link>
                            <Link
                                href="#paket"
                                className="flex items-center gap-3 text-base font-medium hover:text-primary transition-colors py-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <Package className="w-5 h-5" />
                                Paket Umroh
                            </Link>
                            <Link
                                href="#tentang"
                                className="flex items-center gap-3 text-base font-medium hover:text-primary transition-colors py-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <Info className="w-5 h-5" />
                                Tentang Kami
                            </Link>
                            <Link
                                href="#kontak"
                                className="flex items-center gap-3 text-base font-medium hover:text-primary transition-colors py-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <Phone className="w-5 h-5" />
                                Kontak
                            </Link>

                            {/* CTA Button in Mobile Menu */}
                            <div className="pt-4 border-t">
                                <Button
                                    className="w-full gap-2"
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                        openModal();
                                    }}
                                >
                                    <Phone className="w-4 h-4" />
                                    Hubungi WhatsApp
                                </Button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </nav>
    );
}