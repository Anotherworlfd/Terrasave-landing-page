"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle } from "@phosphor-icons/react";
import { TextReveal } from "@/components/ui/text-reveal";

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
          <TextReveal className="text-xs font-medium uppercase tracking-widest text-gray-400">
            Key Benefits
          </TextReveal>
          <TextReveal className="mt-3 max-w-sm font-heading text-3xl font-bold leading-snug text-gray-800 md:text-4xl" delay={0.08}>
            Environmentally friendly clean energy solutions
          </TextReveal>
        </div>

        <div
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
          onMouseLeave={() => setActiveIndex(null)}
        >
          {services.map((s, i) => {
            const isActive = activeIndex === i;

            return (
              <motion.button
                key={s.title}
                type="button"
                onMouseEnter={() => setActiveIndex(i)}
                onFocus={() => setActiveIndex(i)}
                onClick={() => setActiveIndex(i)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
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
                  className={`mt-5 font-heading text-xl font-bold transition-colors duration-300 ${
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
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}