"use client";

import { motion } from "motion/react";
import Button from "@/components/ui/button";

export default function CtaBand() {
  return (
    <section className="relative overflow-hidden">
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
          className="font-syne text-3xl font-bold leading-snug text-white md:text-5xl"
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
          <Button
            variant="primary"
            className="px-8 py-4 text-sm md:text-base"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Get Started Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
}