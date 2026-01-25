"use client";

import Image from "next/image";
import { useParallax } from "@/hooks/useParallax";

export function HeroSection() {
  const offset = useParallax(0.15);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background layer - static, positioned at top */}
      <div className="absolute top-0 left-0 w-full z-0">
        <Image
          src="/background.webp"
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          priority
          className="w-full h-auto"
        />
      </div>

      {/* Foreground layer - parallax, positioned at top */}
      <div
        className="relative w-full z-10"
        style={{ transform: `translateY(-${offset}px)` }}
      >
        <Image
          src="/foreground.webp"
          alt=""
          width={0}
          height={0}
          sizes="100vw"
          priority
          className="w-full h-auto"
        />
        {/* Bottom fade gradient - moves with foreground */}
        <div
          className="absolute bottom-0 left-0 w-full h-24 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent, oklch(0.91 0.03 67.4))",
          }}
        />
      </div>
    </section>
  );
}
