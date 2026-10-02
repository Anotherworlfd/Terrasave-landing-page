"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { ScrollReveal, StaggerReveal } from "@/components/scroll-reveal";

const capabilities = [
  {
    title: "Energy Consulting & Planning",
    image:
      "https://images.unsplash.com/photo-1497440001374-f26997328c1b?q=80&w=800&auto=format&fit=crop",
    alt: "Engineers reviewing energy plans on site",
  },
  {
    title: "On-Site Energy Audits",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop",
    alt: "Solar panels installed on a commercial roof",
  },
  {
    title: "Monitoring & Maintenance",
    image:
      "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=800&auto=format&fit=crop",
    alt: "Technician monitoring wind turbine performance",
  },
];

export default function Capabilities() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const images = section.querySelectorAll(".cap-image");
        images.forEach((img) => {
          gsap.fromTo(
            img,
            { clipPath: "inset(100% 0 0 0)", autoAlpha: 0 },
            {
              clipPath: "inset(0% 0 0 0)",
              autoAlpha: 1,
              duration: 1.1,
              ease: "power3.inOut",
              scrollTrigger: {
                trigger: img,
                start: "top 85%",
                once: true,
              },
            }
          );
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        const images = section.querySelectorAll(".cap-image");
        gsap.set(images, { clipPath: "inset(0% 0 0 0)", autoAlpha: 1 });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <div className="mb-12 text-center">
          <ScrollReveal className="text-xs font-medium uppercase tracking-widest text-gray-400" y={16}>
            Our Services
          </ScrollReveal>
          <ScrollReveal
            className="mx-auto mt-3 max-w-lg font-heading text-3xl font-normal leading-snug text-gray-800 md:text-4xl"
            y={24}
            delay={0.08}
          >
            Commercial green energy services
          </ScrollReveal>
        </div>

        <StaggerReveal
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
          y={40}
          stagger={0.14}
          start="top 80%"
        >
          {capabilities.map((c) => (
            <div key={c.title} className="group">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={c.image}
                  alt={c.alt}
                  className="cap-image h-[260px] w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-[300px]"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-5 font-heading text-lg font-bold text-gray-800">
                {c.title}
              </h3>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
