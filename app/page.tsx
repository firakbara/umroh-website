import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Hero from "@/components/Hero";
import PackageSection from "@/components/PackageSection";
import OrderForm from "@/components/OrderForm";
import WhyChooseUs from "@/components/WhyChooseUs";
import PromoPopup from "@/components/PromoPopup";
import Testimonials from "@/components/Testimonials";
export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gradient-to-b from-blue-50 to-white">
      <Hero />
      <WhyChooseUs />
      <PackageSection />
      <Testimonials />
      <OrderForm />
      <PromoPopup />
      
    </main>
  );
}