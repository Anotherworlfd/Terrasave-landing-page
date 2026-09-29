"use client";

import { motion } from "motion/react";
import { TextReveal } from "@/components/ui/text-reveal";
import { FadeUp } from "@/components/ui/fade-up";

const stats = [
  { value: "$15B+", label: "Client energy spend optimized" },
  { value: "15+", label: "Years of industry experience" },
  { value: "20M+", label: "Tons of CO2 offset to date" },
  { value: "50+", label: "Enterprise partners worldwide" },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Left column: label */}
          <div className="md:col-span-3">
            <TextReveal className="text-xs font-medium uppercase tracking-widest text-gray-400">
              About Us
            </TextReveal>
          </div>

          {/* Right column: heading, description, stats */}
          <div className="md:col-span-9">
            <TextReveal className="font-heading text-3xl font-normal leading-snug text-gray-800 md:text-4xl" delay={0.08}>
              We believe that clean energy is the key to sustainability
            </TextReveal>
            <FadeUp delay={0.18} className="mt-5">
              <p className="text-base leading-relaxed text-gray-500 md:text-lg">
                With modern wind turbines, solar arrays, and comprehensive energy
                audits, we deliver green electricity solutions that are efficient,
                transparent, and ready to support the next generation of enterprise
                operations.
              </p>
            </FadeUp>

            {/* Stats grid */}
            <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="flex flex-col items-start text-left"
                >
                  <p className="font-heading text-4xl font-bold text-gray-800 md:text-5xl">
                    {s.value}
                  </p>
                  <p className="mt-2 text-sm text-gray-500">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Full-width landscape image */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mx-auto mt-16 max-w-7xl px-4 md:px-8 lg:px-12"
      >
        <div className="overflow-hidden rounded-2xl">
          <img
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1600&auto=format&fit=crop"
            alt="Solar panels and wind turbines on a green hillside"
            className="h-[280px] w-full object-cover md:h-[420px] lg:h-[520px]"
            loading="lazy"
          />
        </div>
      </motion.div>
    </section>
  );
}