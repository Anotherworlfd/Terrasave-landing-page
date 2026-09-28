"use client";

import { motion, type Variants } from "motion/react";

const EASE = [0.16, 1, 0.3, 1] as const;

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: EASE,
      delay: i * 0.04,
    },
  }),
};

export function SplitText({
  text,
  className = "",
  baseDelay = 0,
}: {
  text: string;
  className?: string;
  baseDelay?: number;
}) {
  return (
    <span className={`inline-flex flex-wrap justify-center ${className}`}>
      {text.split("").map((char, i) =>
        char === " " ? (
          <span key={`space-${i}`} className="inline-block w-[0.3em]" />
        ) : (
          <motion.span
            key={`${char}-${i}`}
            className="inline-block"
            initial="hidden"
            animate="visible"
            custom={i + baseDelay / 0.04}
            variants={letterVariants}
          >
            {char}
          </motion.span>
        )
      )}
    </span>
  );
}
