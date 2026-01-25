import { HeroSection } from "@/components/hero/HeroSection";
import { NewsletterSignup } from "@/components/newsletter/NewsletterSignup";
import { BentoGrid } from "@/components/apps/BentoGrid";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <NewsletterSignup />
      <BentoGrid />
      <Footer />
    </main>
  );
}
