"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { ScrollReveal, StaggerReveal } from "@/components/scroll-reveal";

const steps = [
  {
    num: "01",
    title: "Initial Consultation",
    body: "We assess your current energy profile, operational goals, and regulatory landscape.",
  },
  {
    num: "02",
    title: "Site Assessment",
    body: "On-site engineers audit infrastructure, consumption patterns, and waste points.",
  },
  {
    num: "03",
    title: "Data Analysis",
    body: "We model scenarios, forecast ROI, and identify the highest-impact interventions.",
  },
  {
    num: "04",
    title: "Strategy Design",
    body: "A tailored roadmap is built around your budget, timeline, and ESG commitments.",
  },
  {
    num: "05",
    title: "Implementation",
    body: "We manage vendor selection, installation oversight, and compliance documentation.",
  },
  {
    num: "06",
    title: "Ongoing Monitoring",
    body: "Continuous tracking and quarterly reviews ensure targets are met and exceeded.",
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const line = lineRef.current;
      if (!section || !line) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Draw the progress line as the process section scrolls through
        gsap.fromTo(
          line,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            transformOrigin: "left center",
            scrollTrigger: {
              trigger: section,
              start: "top 70%",
              end: "bottom 70%",
              scrub: 0.6,
            },
          }
        );
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(line, { scaleX: 1 });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="relative bg-gray-50 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <div className="mb-14">
          <ScrollReveal className="text-xs font-medium uppercase tracking-widest text-gray-400" y={16}>
            Process
          </ScrollReveal>
          <ScrollReveal
            className="mt-3 font-heading text-3xl font-normal leading-snug text-gray-800 md:text-4xl"
            y={24}
            delay={0.08}
          >
            How we deliver clean energy results
          </ScrollReveal>
        </div>

        {/* Animated progress line */}
        <span
          ref={lineRef}
          aria-hidden="true"
          className="mb-2 block h-px w-full origin-left bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600/0"
        />

        <StaggerReveal
          className="grid grid-cols-1 gap-0 md:grid-cols-2 lg:grid-cols-3"
          y={36}
          stagger={0.1}
          start="top 85%"
        >
          {steps.map((step) => (
            <div key={step.num} className="border-t border-gray-200 py-8 md:py-10">
              <span className="font-heading text-xs font-normal tracking-widest text-emerald-600">
                {step.num}
              </span>
              <h3 className="mt-3 font-heading text-lg font-normal text-gray-800">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                {step.body}
              </p>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
