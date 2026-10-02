"use client";

import { useState } from "react";
import { CheckCircle } from "@phosphor-icons/react";
import { ScrollReveal, StaggerReveal } from "@/components/scroll-reveal";

const services = [
  {
    title: "Renewable Energy",
    body: "End-to-end renewable energy strategy, procurement, and grid integration for enterprise operations.",
  },
  {
    title: "Environmentally Friendly",
    body: "Sustainability roadmaps that reduce environmental impact while maintaining operational output.",
  },
  {
    title: "Reduce Carbon Emissions",
    body: "Data-driven carbon audits and reduction plans that meet regulatory and ESG targets.",
  },
  {
    title: "Low Operating Costs",
    body: "Efficiency programs that lower energy spend without compromising performance or reliability.",
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="services" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <div className="mb-12">
          <ScrollReveal className="text-xs font-medium uppercase tracking-widest text-gray-400" y={16}>
            Key Benefits
          </ScrollReveal>
          <ScrollReveal
            className="mt-3 max-w-sm font-heading text-3xl font-normal leading-snug text-gray-800 md:text-4xl"
            y={24}
            delay={0.08}
          >
            Environmentally friendly clean energy solutions
          </ScrollReveal>
        </div>

        <StaggerReveal
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
          y={40}
          stagger={0.12}
          start="top 80%"
        >
          {services.map((s, i) => {
            const isActive = activeIndex === i;

            return (
              <button
                key={s.title}
                type="button"
                onMouseEnter={() => setActiveIndex(i)}
                onFocus={() => setActiveIndex(i)}
                onClick={() => setActiveIndex(i)}
                aria-pressed={isActive}
                className={`group flex h-full cursor-pointer flex-col items-start rounded-2xl border p-8 text-left transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 md:p-10 ${
                  isActive
                    ? "border-emerald-700 bg-emerald-700 text-white shadow-2xl shadow-emerald-900/20"
                    : "border-gray-200 bg-white text-gray-800 shadow-sm hover:border-gray-300"
                }`}
              >
                <CheckCircle
                  size={28}
                  weight="fill"
                  className={`transition-colors duration-300 ${
                    isActive ? "text-white" : "text-emerald-600"
                  }`}
                />
                <h3
                  className={`mt-5 font-heading text-xl font-normal transition-colors duration-300 ${
                    isActive ? "text-white" : "text-gray-800"
                  }`}
                >
                  {s.title}
                </h3>
                <p
                  className={`mt-2 text-sm leading-relaxed transition-colors duration-300 ${
                    isActive ? "text-white/90" : "text-gray-500"
                  }`}
                >
                  {s.body}
                </p>
              </button>
            );
          })}
        </StaggerReveal>
      </div>
    </section>
  );
}
