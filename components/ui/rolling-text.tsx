"use client";

import { motion, Variants } from "motion/react";
import { ReactNode } from "react";

// Cinematic roll: original slides up, clone slides in from below.
const transition = { duration: 0.5, ease: [0.76, 0, 0.24, 1] as const };

const primary: Variants = {
  rest: { y: "0%" },
  hover: { y: "-100%" },
};

const clone: Variants = {
  rest: { y: "100%" },
  hover: { y: "0%" },
};

type RollingTextProps = {
  children: ReactNode;
  className?: string;
};

export default function RollingText({
  children,
  className = "",
}: RollingTextProps) {
  return (
    <motion.span
      className={`relative inline-flex overflow-hidden ${className}`}
      initial="rest"
      animate="rest"
      whileHover="hover"
    >
      <motion.span
        variants={primary}
        transition={transition}
        className="inline-block"
      >
        {children}
      </motion.span>
      <motion.span
        aria-hidden="true"
        variants={clone}
        transition={transition}
        className="absolute inset-0 inline-block"
      >
        {children}
      </motion.span>
    </motion.span>
  );
}
