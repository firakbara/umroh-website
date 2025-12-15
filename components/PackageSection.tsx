import PackageCard from "./PackageCard";
import { packages } from "@/lib/data";

export default function PackageSection() {
    return (
        <section id="paket" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 space-y-4">
                    <h2 className="text-3xl font-bold text-gray-900">Pilihan Paket Umroh Terbaik</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Temukan paket ibadah yang sesuai dengan kebutuhan dan budget Anda.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {packages.map((pkg) => (
                        /* Tambahkan link ke slug */
                        <PackageCard key={pkg.id} data={{ ...pkg, url: `/paket/${pkg.slug}` }} />
                    ))}
                </div>
            </div>
        </section>
    );
}