"use client";

import type { ReactNode } from "react";
import { useReveal, type RevealOptions } from "@/lib/use-reveal";
import {
  useStaggerReveal,
  type StaggerRevealOptions,
} from "@/lib/use-stagger-reveal";

type ScrollRevealProps = RevealOptions & {
  children: ReactNode;
  className?: string;
};

/**
 * Single-element scroll reveal wrapper.
 * Fades + slides its children into view once, on scroll.
 */
export function ScrollReveal({
  children,
  className = "",
  ...options
}: ScrollRevealProps) {
  const ref = useReveal(options);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

type StaggerRevealProps = StaggerRevealOptions & {
  children: ReactNode;
  className?: string;
};

/**
 * Container that staggers the scroll-reveal of its direct children.
 */
export function StaggerReveal({
  children,
  className = "",
  ...options
}: StaggerRevealProps) {
  const ref = useStaggerReveal(options);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
