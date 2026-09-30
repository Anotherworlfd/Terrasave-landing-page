"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { ReactNode } from "react";

export function FadeUpStagger({
  children,
  className = "",
  staggerDelay = 0.15,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

type FadeUpItemProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
  y?: number;
};

export function FadeUpItem({ children, className = "", y = 40, ...rest }: FadeUpItemProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
