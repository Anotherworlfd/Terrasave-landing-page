"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { ScrollReveal, StaggerReveal } from "@/components/scroll-reveal";
import PillButton from "@/components/ui/pill-button";

export default function CtaBand() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const image = imageRef.current;
      if (!section || !image) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Subtle zoom on the background image as it scrolls into view
        gsap.fromTo(
          image,
          { scale: 1.15 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top 90%",
              end: "bottom 60%",
              scrub: true,
            },
          }
        );
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(image, { scale: 1 });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="mx-auto my-16 w-[calc(100%-2rem)] max-w-7xl md:my-24 md:w-[calc(100%-4rem)]"
    >
      <div className="relative overflow-hidden rounded-2xl">
        <img
          ref={imageRef}
          src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1600&auto=format&fit=crop"
          alt="Wind turbines on a hillside at dusk"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-emerald-950/65" />

        <StaggerReveal className="relative z-10 mx-auto max-w-3xl px-4 py-24 text-center md:py-32" y={32} stagger={0.14}>
          <div>
            <h2 className="font-heading text-3xl font-normal leading-snug text-white md:text-5xl">
              Join us in building a greener enterprise
            </h2>
          </div>

          <div>
            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/85">
              Book a free consultation and get a clear read on where your energy
              spend is going.
            </p>
          </div>

          <div className="mt-8 flex justify-center">
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
        </StaggerReveal>
      </div>
    </section>
  );
}
