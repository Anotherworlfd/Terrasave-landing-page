"use client";

import { TrendDown, ShieldCheck, TreePalm, type Icon } from "@phosphor-icons/react";
import { TextReveal } from "@/components/ui/text-reveal";
import { FadeUpStagger, FadeUpItem } from "@/components/ui/fade-up-stagger";

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
    <FadeUpItem className="text-left">
      <Icon
        size={28}
        weight="bold"
        className="text-emerald-600 mb-4"
      />
      <h3 className="text-base font-semibold text-gray-800 mb-2">
        {title}
      </h3>
      <p className="text-gray-500 leading-relaxed">{description}</p>
    </FadeUpItem>
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
    <section id="why-us" className="bg-white py-16 md:py-24 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-20">
          <TextReveal className="text-3xl md:text-4xl lg:text-5xl font-normal text-gray-800 font-heading text-center">
            Why Choose TerraSave
          </TextReveal>
        </div>

        <FadeUpStagger className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {valueProps.map((prop) => (
            <ValuePropItem key={prop.title} {...prop} />
          ))}
        </FadeUpStagger>
      </div>
    </section>
  );
}
