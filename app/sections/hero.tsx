"use client";

import Header from "./header";
import PillButton from "@/components/ui/pill-button";
import { SplitText } from "@/components/ui/split-text";
import { FadeUpStagger, FadeUpItem } from "@/components/ui/fade-up-stagger";

const BACKGROUND_IMAGE =
  "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=2500&auto=format&fit=crop";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] flex-col justify-between overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${BACKGROUND_IMAGE}')` }}
        aria-hidden="true"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />

      {/* Extra scrim behind the bottom text row */}
      <div
        className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/50 to-transparent"
        aria-hidden="true"
      />

      {/* Transparent overlay nav */}
      <Header />

      {/* Center: massive wordmark */}
      <div className="relative z-10 flex flex-1 items-center justify-center px-4 pt-24">
        <h1 className="text-center font-syne text-4xl font-black leading-none tracking-tighter whitespace-nowrap text-white sm:text-6xl md:text-8xl lg:text-[10rem] xl:text-[12rem]">
          <SplitText text="TerraSave" className="flex-nowrap" />
        </h1>
      </div>

      {/* Bottom row: paragraph left, CTA right */}
      <FadeUpStagger className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 pb-10 md:flex-row md:items-end md:justify-between md:px-8 md:pb-14 lg:px-12 lg:pb-16">
        <FadeUpItem className="max-w-md text-base leading-relaxed text-white md:text-lg">
          Commercial green energy consulting and B2B energy audits that cut
          costs and keep enterprises ahead of regulation.
        </FadeUpItem>

        <FadeUpItem className="flex-shrink-0">
          <PillButton
            className="text-sm md:text-base"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Get Started Now
          </PillButton>
        </FadeUpItem>
      </FadeUpStagger>
    </section>
  );
}