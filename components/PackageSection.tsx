"use client";
import PackageCard from "./PackageCard";
import { packages } from "@/lib/data";
import { Sparkles } from "lucide-react";

export default function PackageSection() {
    return (
        <section id="paket" className="relative py-24 overflow-hidden">
            {/* Background with Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-sky-50 via-white to-blue-50"></div>

            {/* Decorative Blobs */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header with Premium Design */}
                <div className="text-center mb-16 space-y-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-semibold text-sm">
                        <Sparkles className="w-4 h-4" />
                        Paket Pilihan
                    </div>

                    <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                        <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                            Paket Umroh
                        </span>{" "}
                        Terbaik Kami
                    </h2>

                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Pilih paket ibadah yang sesuai dengan kebutuhan dan budget Anda.
                        Semua paket dilengkapi dengan fasilitas premium dan pelayanan terbaik.
                    </p>
                </div>

                {/* Package Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {packages.map((pkg, index) => (
                        <div
                            key={pkg.id}
                            style={{ animationDelay: `${index * 100}ms` }}
                            className="animate-in fade-in slide-in-from-bottom-4 duration-500"
                        >
                            <PackageCard data={{ ...pkg, url: `/paket/${pkg.slug}` }} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}