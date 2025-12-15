"use client";
import { useState, useEffect } from "react";
import { X, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface LeadFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    defaultMessage: string;
}

export default function LeadFormModal({ isOpen, onClose, defaultMessage }: LeadFormModalProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [whatsappUrl, setWhatsappUrl] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        passengers: 1,
        notes: ""
    });

    // Update notes saat defaultMessage berubah
    useEffect(() => {
        if (isOpen) {
            setFormData(prev => ({ ...prev, notes: defaultMessage }));
            setShowSuccess(false);
        }
    }, [isOpen, defaultMessage]);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // 1. Simulasi Simpan Data (bisa diganti API Call nanti)
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log("Lead Saved:", formData);

        // 2. Format Pesan WA (gunakan template lebih clean)
        const phone = "6285158394338";
        const msgLines = [
            "🕌 *BERKAH UMROH INDONESIA*",
            "━━━━━━━━━━━━━━━━━",
            "",
            "Assalamualaikum Admin 👋",
            "Saya tertarik untuk konsultasi paket umroh.",
            "",
            "📋 *DATA JAMAAH*",
            `👤 Nama: ${formData.name}`,
            `📧 Email: ${formData.email}`,
            `📱 WhatsApp: ${formData.phone}`,
            `👥 Jumlah Jamaah: ${formData.passengers} orang`,
            "",
            "💬 *CATATAN TAMBAHAN*",
            formData.notes || "_Tidak ada catatan_",
            "",
            "━━━━━━━━━━━━━━━━━",
            "Mohon informasi lebih lanjut. Terima kasih! 🙏"
        ];

        const message = encodeURIComponent(msgLines.join("\n"));
        const url = `https://api.whatsapp.com/send/?phone=${phone}&text=${message}&type=phone_number&app_absent=0`;
        setWhatsappUrl(url);

        setIsLoading(false);
        setShowSuccess(true);
    };

    const handleWhatsAppRedirect = () => {
        window.open(whatsappUrl, "_blank");
        onClose();
        // Reset state
        setShowSuccess(false);
        setFormData({
            name: "",
            email: "",
            phone: "",
            passengers: 1,
            notes: ""
        });
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">

            {!showSuccess ? (
                // Form Mode
                <div className="bg-white rounded-xl shadow-xl max-w-lg w-full relative max-h-[90vh] overflow-y-auto">

                    <div className="p-5 border-b sticky top-0 bg-white z-10 flex justify-between items-center">
                        <div>
                            <h3 className="font-bold text-xl text-primary">Formulir Konsultasi</h3>
                            <p className="text-sm text-gray-500">Isi data sebelum terhubung ke WhatsApp</p>
                        </div>
                        <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="p-6 space-y-4">
                        {/* Nama */}
                        <div className="space-y-2">
                            <Label>Nama Lengkap</Label>
                            <Input
                                required
                                placeholder="Nama Anda"
                                value={formData.name}
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>

                        {/* Kontak Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label>Email</Label>
                                <Input
                                    type="email"
                                    placeholder="email@contoh.com"
                                    value={formData.email}
                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>No. WhatsApp</Label>
                                <Input
                                    required
                                    type="tel"
                                    placeholder="08..."
                                    value={formData.phone}
                                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>
                        </div>

                        {/* Jumlah Jamaah */}
                        <div className="space-y-2">
                            <Label>Rencana Jumlah Jamaah</Label>
                            <Input
                                type="number"
                                min="1"
                                value={formData.passengers}
                                onChange={e => setFormData({ ...formData, passengers: parseInt(e.target.value) || 1 })}
                            />
                        </div>

                        {/* Catatan */}
                        <div className="space-y-2">
                            <Label>Pesan / Paket yang Diminati</Label>
                            <Textarea
                                rows={3}
                                value={formData.notes}
                                onChange={e => setFormData({ ...formData, notes: e.target.value })}
                            />
                        </div>

                        <Button type="submit" className="w-full h-12 text-lg font-bold" disabled={isLoading}>
                            {isLoading ? (
                                <span className="flex items-center gap-2">
                                    <Loader2 className="w-4 h-4 animate-spin" /> Menyimpan Data...
                                </span>
                            ) : (
                                "Simpan & Lanjutkan"
                            )}
                        </Button>
                    </form>

                </div>
            ) : (
                // Success Mode
                <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-8 text-center space-y-6 animate-in zoom-in duration-300">
                    <div className="flex justify-center">
                        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                            <CheckCircle className="w-12 h-12 text-green-600" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-gray-900">Data Berhasil Disimpan!</h3>
                        <p className="text-gray-600">Silakan klik tombol di bawah untuk melanjutkan konsultasi ke WhatsApp kami.</p>
                    </div>

                    <div className="space-y-3">
                        <Button
                            onClick={handleWhatsAppRedirect}
                            className="w-full h-12 text-lg font-bold"
                        >
                            Hubungi WhatsApp
                        </Button>
                        <Button
                            variant="ghost"
                            onClick={onClose}
                            className="w-full"
                        >
                            Tutup
                        </Button>
                    </div>
                </div>
            )}

        </div>
    );
}
