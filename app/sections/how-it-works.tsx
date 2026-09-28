"use client";

import { motion } from "motion/react";
import { TextReveal } from "@/components/ui/text-reveal";

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
  return (
    <section id="how-it-works" className="bg-gray-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <div className="mb-14">
          <TextReveal className="text-xs font-medium uppercase tracking-widest text-gray-400">
            Process
          </TextReveal>
          <TextReveal className="mt-3 font-syne text-3xl font-bold leading-snug text-gray-800 md:text-4xl" delay={0.08}>
            How we deliver clean energy results
          </TextReveal>
        </div>

        <div className="grid grid-cols-1 gap-0 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="border-t border-gray-200 py-8 md:py-10"
            >
              <span className="font-syne text-xs font-bold tracking-widest text-emerald-600">
                {step.num}
              </span>
              <h3 className="mt-3 font-syne text-lg font-bold text-gray-800">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}