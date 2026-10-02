"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
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
      className="h-16 w-16 md:h-20 md:w-20"
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
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          section.querySelector(".marquee-label"),
          { autoAlpha: 0, y: 16 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              once: true,
            },
          }
        );
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(section.querySelector(".marquee-label"), {
          autoAlpha: 1,
          y: 0,
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <p className="marquee-label mb-10 text-center text-xs font-medium uppercase tracking-widest text-gray-400">
          Trusted by Industry Leaders
        </p>

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
