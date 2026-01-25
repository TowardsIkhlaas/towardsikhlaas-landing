import { HeroSection } from "@/components/hero/HeroSection";
import { NewsletterSignup } from "@/components/newsletter/NewsletterSignup";
import { BentoGrid } from "@/components/apps/BentoGrid";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen md:landscape:flex">
      {/* Hero column - sticky on wide landscape, 612-1250px width */}
      <div className="
        w-full
        md:landscape:w-1/3 md:landscape:min-w-[612px] md:landscape:max-w-[1250px]
        md:landscape:sticky md:landscape:top-0 md:landscape:h-screen md:landscape:overflow-hidden
      ">
        <HeroSection />
      </div>

      {/* Content column - grows to fill remaining space */}
      <div className="w-full md:landscape:flex-1 md:landscape:flex md:landscape:flex-col md:landscape:min-h-screen md:landscape:px-24">
        <div className="md:landscape:mt-16">
          <NewsletterSignup />
        </div>
        <BentoGrid />
        <div className="md:landscape:mt-auto">
          <Footer />
        </div>
      </div>
    </main>
  );
}
