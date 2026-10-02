"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

export type StaggerRevealOptions = {
  /** Selector for child elements to animate. */
  selector?: string;
  /** Vertical offset (px) to travel from. */
  y?: number;
  /** Horizontal offset (px) to travel from. */
  x?: number;
  /** Scale to travel from. */
  scale?: number;
  /** Delay before first child starts, in seconds. */
  delay?: number;
  /** Tween duration per child, in seconds. */
  duration?: number;
  /** Stagger interval between children, in seconds. */
  stagger?: number;
  /** ScrollTrigger start position. */
  start?: string;
  /** GSAP ease string. */
  ease?: string;
};

/**
 * Scroll-reveal hook for a container with staggered children.
 * Each child animates in sequentially as the container enters view.
 */
export function useStaggerReveal<T extends HTMLElement = HTMLDivElement>(
  options: StaggerRevealOptions = {}
) {
  const {
    selector = ":scope > *",
    y = 30,
    x = 0,
    scale,
    delay = 0,
    duration = 0.8,
    stagger = 0.12,
    start = "top 80%",
    ease = "power3.out",
  } = options;

  const ref = useRef<T>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const children = el.querySelectorAll(selector);
      if (!children.length) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          children,
          { autoAlpha: 0, y, x, ...(scale !== undefined ? { scale } : {}) },
          {
            autoAlpha: 1,
            y: 0,
            x: 0,
            ...(scale !== undefined ? { scale: 1 } : {}),
            duration,
            delay,
            stagger,
            ease,
            scrollTrigger: { trigger: el, start, once: true },
          }
        );
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(children, { autoAlpha: 1, y: 0, x: 0, scale: 1 });
      });
    },
    { scope: ref }
  );

  return ref;
}
