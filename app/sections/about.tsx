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
        {/* Text description */}
        <div className="mx-auto max-w-3xl text-center">
          <TextReveal className="text-xs font-medium uppercase tracking-widest text-gray-400">
            About Us
          </TextReveal>
          <TextReveal className="mt-4 font-syne text-3xl font-bold leading-snug text-gray-800 md:text-4xl" delay={0.08}>
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
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <p className="font-syne text-4xl font-bold text-gray-800 md:text-5xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm text-gray-500">{s.label}</p>
            </motion.div>
          ))}
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