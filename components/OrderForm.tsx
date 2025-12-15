"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea"; // Pastikan file ini ada di components/ui
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
export default function OrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    passengers: 1,
    notes: ""
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulasi kirim data (nanti bisa disambung ke API)
    alert(`Terima kasih ${formData.name}, pesanan Anda sedang kami proses!`);
    console.log("Data Pesanan:", formData);
  };
  return (
    <section id="order" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-2xl">
        <Card className="shadow-lg border-primary/20">
          <CardHeader className="text-center space-y-2">
            <CardTitle className="text-3xl font-bold text-primary">Formulir Pemesanan</CardTitle>
            <CardDescription>
              Isi data diri Anda untuk konsultasi atau pemesanan paket umroh.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nama Lengkap */}
              <div className="space-y-2">
                <Label htmlFor="name">Nama Lengkap</Label>
                <Input 
                  id="name" 
                  name="name" 
                  placeholder="Contoh: Budi Santoso" 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              {/* Kontak (Email & HP) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="email@contoh.com" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">No. WhatsApp</Label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    type="tel" 
                    placeholder="081234567890" 
                    required 
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              {/* Jumlah Jamaah */}
              <div className="space-y-2">
                <Label htmlFor="passengers">Jumlah Jamaah</Label>
                <Input 
                  id="passengers" 
                  name="passengers" 
                  type="number" 
                  min="1" 
                  value={formData.passengers}
                  onChange={handleChange}
                />
              </div>
              {/* Catatan */}
              <div className="space-y-2">
                <Label htmlFor="notes">Catatan Tambahan (Opsional)</Label>
                <Textarea 
                  id="notes" 
                  name="notes" 
                  placeholder="Misal: Saya ingin berangkat bulan Februari..." 
                  value={formData.notes}
                  onChange={handleChange}
                />
              </div>
              <Button type="submit" className="w-full text-lg py-6">
                Pesan Sekarang
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}