import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ModalProvider } from "@/context/ModalContext";

export const metadata: Metadata = {
  title: "Berkah Umroh Indonesia - Paket Umroh Terpercaya",
  description: "Wujudkan impian ibadah ke Tanah Suci bersama Berkah Umroh Indonesia. Paket Umroh nyaman, aman, dan terjangkau dengan fasilitas bintang 5.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ModalProvider>
          <Navbar />

          {children}
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
