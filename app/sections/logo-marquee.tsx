"use client";

import { motion } from "motion/react";
import { Marquee } from "@/components/ui/marquee";

const LogoMarks = [
  { name: "Apex Energy", initials: "AE" },
  { name: "Vertex Power", initials: "VP" },
  { name: "Summit Holdings", initials: "SH" },
  { name: "Horizon Grid", initials: "HG" },
];

function MonogramMark({
  initials,
  name,
}: {
  initials: string;
  name: string;
}) {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      className="w-16 h-16 md:w-20 md:h-20"
      role="img"
      aria-label={name}
    >
      <circle
        cx="40"
        cy="40"
        r="38"
        fill="mask-gradient"
        stroke="#9CA3AF"
        strokeWidth="1"
      />
      <text
        x="40"
        y="48"
        textAnchor="middle"
        fontSize="28"
        fontWeight="700"
        fill="#9CA3AF"
        fontFamily="system-ui, -apple-system"
      >
        {initials}
      </text>
    </svg>
  );
}

export default function LogoMarquee() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-widest text-gray-400 mb-10 text-center font-medium"
        >
          Trusted by Industry Leaders
        </motion.p>

        <Marquee duration={20} className="flex items-center">
          {LogoMarks.map((logo) => (
            <div key={logo.name} className="mx-8 flex-shrink-0 md:mx-12">
              <MonogramMark initials={logo.initials} name={logo.name} />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
