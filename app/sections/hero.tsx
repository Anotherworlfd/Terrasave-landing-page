"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import Header from "./header";
import PillButton from "@/components/ui/pill-button";
import { SplitText } from "@/components/ui/split-text";

const BACKGROUND_IMAGE =
  "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=2500&auto=format&fit=crop";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const bg = bgRef.current;
      const overlay = overlayRef.current;
      const content = contentRef.current;
      const bottom = bottomRef.current;
      if (!section || !bg || !overlay || !content || !bottom) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // Background entrance: scale from 1.1 to 1 + fade in
        tl.fromTo(
          bg,
          { scale: 1.12, autoAlpha: 0 },
          { scale: 1, autoAlpha: 1, duration: 1.6 }
        );

        // Overlay fades in
        tl.fromTo(overlay, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.8 }, "-=1.2");

        // Hero content entrance
        tl.fromTo(
          content.children,
          { autoAlpha: 0, y: 40 },
          { autoAlpha: 1, y: 0, duration: 1, stagger: 0.08 },
          "-=0.6"
        );

        // Bottom row entrance
        tl.fromTo(
          bottom.children,
          { autoAlpha: 0, y: 30 },
          { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.1 },
          "-=0.5"
        );

        // Subtle parallax on background during scroll
        gsap.to(bg, {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set([bg, overlay, content.children, bottom.children], {
          autoAlpha: 1,
          y: 0,
          scale: 1,
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative flex min-h-[100dvh] flex-col justify-between overflow-hidden"
    >
      {/* Background image */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${BACKGROUND_IMAGE}')` }}
        aria-hidden="true"
      />

      {/* Dark overlay for readability */}
      <div ref={overlayRef} className="absolute inset-0 bg-black/30" aria-hidden="true" />

      {/* Extra scrim behind the bottom text row */}
      <div
        className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/50 to-transparent"
        aria-hidden="true"
      />

      {/* Transparent overlay nav */}
      <Header />

      {/* Center: massive wordmark */}
      <div
        ref={contentRef}
        className="relative z-10 flex flex-1 items-center justify-center px-4 pt-24"
      >
        <h1 className="text-center font-syne text-4xl font-black leading-none tracking-tighter whitespace-nowrap text-white sm:text-6xl md:text-8xl lg:text-[10rem] xl:text-[12rem]">
          <SplitText text="TerraSave" className="flex-nowrap" />
        </h1>
      </div>

      {/* Bottom row: paragraph left, CTA right */}
      <div
        ref={bottomRef}
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 pb-10 md:flex-row md:items-end md:justify-between md:px-8 md:pb-14 lg:px-12 lg:pb-16"
      >
        <p className="max-w-md text-base leading-relaxed text-white md:text-lg">
          Commercial green energy consulting and B2B energy audits that cut
          costs and keep enterprises ahead of regulation.
        </p>

        <div className="flex-shrink-0">
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
        </div>
      </div>
    </section>
  );
}
