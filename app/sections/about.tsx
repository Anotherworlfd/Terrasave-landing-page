"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { ScrollReveal, StaggerReveal } from "@/components/scroll-reveal";
import { ParallaxImage } from "@/components/parallax-image";

const stats = [
  { value: "$15B+", label: "Client energy spend optimized" },
  { value: "15+", label: "Years of industry experience" },
  { value: "20M+", label: "Tons of CO2 offset to date" },
  { value: "50+", label: "Enterprise partners worldwide" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Stats counter-like animation
        const statValues = section.querySelectorAll(".stat-value");
        statValues.forEach((el) => {
          gsap.fromTo(
            el,
            { autoAlpha: 0, y: 24 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                once: true,
              },
            }
          );
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="about" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Left column: label */}
          <div className="md:col-span-3">
            <ScrollReveal className="text-xs font-medium uppercase tracking-widest text-gray-400" y={16}>
              About Us
            </ScrollReveal>
          </div>

          {/* Right column: heading, description, stats */}
          <div className="md:col-span-9">
            <ScrollReveal
              className="font-heading text-3xl font-normal leading-snug text-gray-800 md:text-4xl"
              y={28}
              delay={0.08}
            >
              We believe that clean energy is the key to sustainability
            </ScrollReveal>

            <ScrollReveal className="mt-5" y={24} delay={0.16}>
              <p className="text-base leading-relaxed text-gray-500 md:text-lg">
                With modern wind turbines, solar arrays, and comprehensive energy
                audits, we deliver green electricity solutions that are efficient,
                transparent, and ready to support the next generation of enterprise
                operations.
              </p>
            </ScrollReveal>

            {/* Stats grid */}
            <StaggerReveal
              className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4"
              y={30}
              stagger={0.12}
              start="top 85%"
            >
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col items-start text-left">
                  <p className="stat-value font-heading text-4xl font-bold text-gray-800 md:text-5xl">
                    {s.value}
                  </p>
                  <p className="mt-2 text-sm text-gray-500">{s.label}</p>
                </div>
              ))}
            </StaggerReveal>
          </div>
        </div>
      </div>

      {/* Full-width landscape image */}
      <div className="mx-auto mt-16 max-w-7xl px-4 md:px-8 lg:px-12">
        <ScrollReveal className="rounded-2xl" scale={0.98}>
          <ParallaxImage
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1600&auto=format&fit=crop"
            alt="Solar panels and wind turbines on a green hillside"
            className="h-[280px] w-full rounded-2xl md:h-[420px] lg:h-[520px]"
            speed={-40}
            scale={1.18}
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
