"use client";

import { TrendDown, ShieldCheck, TreePalm, type Icon } from "@phosphor-icons/react";
import { ScrollReveal, StaggerReveal } from "@/components/scroll-reveal";

function ValuePropItem({
  icon: Icon,
  title,
  description,
}: {
  icon: Icon;
  title: string;
  description: string;
}) {
  return (
    <div className="text-left">
      <Icon size={28} weight="bold" className="mb-4 text-emerald-600" />
      <h3 className="mb-2 text-base font-semibold text-gray-800">
        {title}
      </h3>
      <p className="leading-relaxed text-gray-500">{description}</p>
    </div>
  );
}

export default function WhyUs() {
  const valueProps = [
    {
      icon: TrendDown,
      title: "Cost Reduction",
      description:
        "Measurable savings through efficiency optimization and strategic energy management.",
    },
    {
      icon: ShieldCheck,
      title: "Regulatory Compliance",
      description:
        "Stay ahead of environmental regulations and industry standards with expert guidance.",
    },
    {
      icon: TreePalm,
      title: "Corporate Responsibility",
      description:
        "Strengthen your ESG credentials and demonstrate commitment to sustainability.",
    },
  ];

  return (
    <section id="why-us" className="bg-white px-4 py-16 md:px-8 md:py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 md:mb-20">
          <ScrollReveal
            className="text-center font-heading text-3xl font-normal text-gray-800 md:text-4xl lg:text-5xl"
            y={24}
          >
            Why Choose TerraSave
          </ScrollReveal>
        </div>

        <StaggerReveal
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
          y={36}
          stagger={0.14}
          start="top 80%"
        >
          {valueProps.map((prop) => (
            <ValuePropItem key={prop.title} {...prop} />
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
