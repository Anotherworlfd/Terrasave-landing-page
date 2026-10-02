"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export type RevealOptions = {
  /** Vertical offset (px) to travel from. */
  y?: number;
  /** Horizontal offset (px) to travel from. */
  x?: number;
  /** Scale to travel from (e.g. 0.95). */
  scale?: number;
  /** Delay before the reveal starts, in seconds. */
  delay?: number;
  /** Tween duration, in seconds. */
  duration?: number;
  /** ScrollTrigger start position. */
  start?: string;
  /** GSAP ease string. */
  ease?: string;
};

/**
 * Shared scroll-reveal hook: fades + translates an element into view once,
 * the first time it crosses the viewport threshold. Respects
 * `prefers-reduced-motion` by showing the element immediately.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: RevealOptions = {}
) {
  const {
    y = 24,
    x = 0,
    scale,
    delay = 0,
    duration = 0.9,
    start = "top 85%",
    ease = "power3.out",
  } = options;

  const ref = useRef<T>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          el,
          { autoAlpha: 0, y, x, ...(scale !== undefined ? { scale } : {}) },
          {
            autoAlpha: 1,
            y: 0,
            x: 0,
            ...(scale !== undefined ? { scale: 1 } : {}),
            duration,
            delay,
            ease,
            scrollTrigger: { trigger: el, start, once: true },
          }
        );
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(el, { autoAlpha: 1, y: 0, x: 0, scale: 1 });
      });
    },
    { scope: ref }
  );

  return ref;
}
