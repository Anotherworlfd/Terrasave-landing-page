"use client";

import { motion } from "motion/react";
import { TextReveal } from "@/components/ui/text-reveal";

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
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <div className="mb-12 text-center">
          <TextReveal className="text-xs font-medium uppercase tracking-widest text-gray-400">
            Our Services
          </TextReveal>
          <TextReveal className="mx-auto mt-3 max-w-lg font-syne text-3xl font-bold leading-snug text-gray-800 md:text-4xl" delay={0.08}>
            Commercial green energy services
          </TextReveal>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {capabilities.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="group"
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={c.image}
                  alt={c.alt}
                  className="h-[260px] w-full object-cover transition-transform duration-500 group-hover:scale-105 md:h-[300px]"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-5 font-syne text-lg font-bold text-gray-800">
                {c.title}
              </h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}