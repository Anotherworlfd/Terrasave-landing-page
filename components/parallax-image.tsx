"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

type ParallaxImageProps = {
  src: string;
  alt: string;
  className?: string;
  /** How far the image shifts relative to scroll. Negative = moves up. */
  speed?: number;
  /** Extra scale applied to avoid empty edges during parallax. */
  scale?: number;
};

/**
 * Image with a subtle parallax scrub effect tied to scroll position.
 * The wrapper should have overflow-hidden to clip the moving image.
 */
export function ParallaxImage({
  src,
  alt,
  className = "",
  speed = -30,
  scale = 1.15,
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const img = imgRef.current;
      if (!container || !img) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          img,
          { y: speed, scale },
          {
            y: -speed,
            scale,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(img, { y: 0, scale: 1 });
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        loading="lazy"
      />
    </div>
  );
}
