"use client";

import { motion } from "motion/react";
import PillButton from "@/components/ui/pill-button";

export default function CtaBand() {
  return (
    <section className="mx-auto my-16 w-[calc(100%-2rem)] max-w-7xl md:my-24 md:w-[calc(100%-4rem)]">
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1600&auto=format&fit=crop"
          alt="Wind turbines on a hillside at dusk"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-emerald-950/65" />

        <div className="relative z-10 mx-auto max-w-3xl px-4 py-24 text-center md:py-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-heading text-3xl font-normal leading-snug text-white md:text-5xl"
          >
            Join us in building a greener enterprise
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/85"
          >
            Book a free consultation and get a clear read on where your energy
            spend is going.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex justify-center"
          >
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
          </motion.div>
        </div>
    </div>
    </section>
  );
}