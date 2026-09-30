"use client";

import { Quotes } from "@phosphor-icons/react";
import { TextReveal } from "@/components/ui/text-reveal";
import { FadeUpStagger, FadeUpItem } from "@/components/ui/fade-up-stagger";

const testimonials = [
  {
    quote:
      "The audit found waste we had missed for years. Our facilities budget dropped within two quarters.",
    name: "Marta Oyelaran",
    role: "Facilities Director",
  },
  {
    quote:
      "Their ESG roadmap gave our board a clear, defensible path to reporting compliance.",
    name: "Dmitri Vasquez",
    role: "Head of Sustainability",
  },
  {
    quote:
      "Straightforward advice, no jargon. The ROI modelling made the business case for us.",
    name: "Priya Raghunathan",
    role: "Chief Operating Officer",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <div className="mb-12 text-center">
          <TextReveal className="text-xs font-medium uppercase tracking-widest text-gray-400">
            Testimonials
          </TextReveal>
          <TextReveal className="mx-auto mt-3 max-w-lg font-heading text-3xl font-normal leading-snug text-gray-800 md:text-4xl" delay={0.08}>
            What enterprise teams say
          </TextReveal>
        </div>

        <FadeUpStagger className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <FadeUpItem
              key={t.name}
              className="flex flex-col rounded-2xl bg-white p-8"
            >
              <Quotes size={24} weight="fill" className="text-emerald-600" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-gray-600">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-gray-100 pt-4">
                <p className="text-sm font-semibold text-gray-800">{t.name}</p>
                <p className="text-xs text-gray-500">{t.role}</p>
              </figcaption>
            </FadeUpItem>
          ))}
        </FadeUpStagger>
      </div>
    </section>
  );
}