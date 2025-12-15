import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
export default function Footer() {
  return (
    <footer id="kontak" className="bg-slate-900 text-slate-200 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Kolom 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🕋</span>
              <span className="text-xl font-bold text-white">Berkah Umroh</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Mitra terpercaya ibadah Anda. Melayani dengan hati, mengantarkan Anda menuju Baitullah dengan rasa aman dan nyaman.
            </p>
          </div>
          {/* Kolom 2: Link Cepat */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Pintasan</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">Beranda</Link>
              </li>
              <li>
                <Link href="#paket" className="hover:text-primary transition-colors">Paket Umroh</Link>
              </li>
              <li>
                <Link href="#order" className="hover:text-primary transition-colors">Cara Pemesanan</Link>
              </li>
              <li>
                <Link href="#tentang" className="hover:text-primary transition-colors">Tentang Kami</Link>
              </li>
            </ul>
          </div>
          {/* Kolom 3: Kontak */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Hubungi Kami</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Jl. H. Nawi Raya No. 12, Jakarta Selatan, DKI Jakarta 12420</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+62 85158394338</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>info@berkahumroh.id</span>
              </div>
              
              {/* Social Media */}
              <div className="flex gap-4 pt-2">
                <Link href="#" className="hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Berkah Umroh Indonesia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}