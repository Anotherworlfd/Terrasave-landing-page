"use client";

import { motion, type Variants } from "motion/react";
import { ReactNode } from "react";

type TextRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

const EASE = [0.16, 1, 0.3, 1] as const;

const revealVariants: Variants = {
  hidden: { y: "100%" },
  visible: (delay: number) => ({
    y: "0%",
    transition: {
      duration: 0.85,
      ease: EASE,
      delay,
    },
  }),
};

export function TextReveal({ children, className = "", delay = 0 }: TextRevealProps) {
  return (
    <span className={`block overflow-hidden ${className}`}>
      <motion.span
        className="block"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        custom={delay}
        variants={revealVariants}
      >
        {children}
      </motion.span>
    </span>
  );
}
