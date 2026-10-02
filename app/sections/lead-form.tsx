"use client";

import { useRef, useState, FormEvent } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import Input from "@/components/ui/input";
import Select from "@/components/ui/select";
import Button from "@/components/ui/button";
import RollingText from "@/components/ui/rolling-text";

const BACKGROUND_IMAGE =
  "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2070&auto=format&fit=crop";

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const cards = section.querySelectorAll(".lead-reveal");
        cards.forEach((card, i) => {
          gsap.fromTo(
            card,
            { autoAlpha: 0, y: 40 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.9,
              delay: i * 0.12,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section,
                start: "top 75%",
                once: true,
              },
            }
          );
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(section.querySelectorAll(".lead-reveal"), {
          autoAlpha: 1,
          y: 0,
        });
      });
    },
    { scope: sectionRef, dependencies: [submitted] }
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <section
        ref={sectionRef}
        id="contact"
        className="relative overflow-hidden py-24 md:py-32"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${BACKGROUND_IMAGE}')` }}
          aria-hidden="true"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

        <div className="relative z-10 mx-auto max-w-2xl px-4 md:px-8 lg:px-12">
          <div className="lead-reveal">
            <div className="rounded-3xl border border-white/20 bg-white/10 p-10 shadow-2xl backdrop-blur-md md:p-12">
              <div className="mb-4">
                <svg
                  className="mx-auto h-16 w-16 text-emerald-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="mb-3 text-center font-heading text-2xl font-normal text-white md:text-3xl">
                Request Received
              </h2>
              <p className="text-center text-white/70">
                Thank you. A sustainability specialist will contact you within
                24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden py-24 md:py-32"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${BACKGROUND_IMAGE}')` }}
        aria-hidden="true"
      />
      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-32">
          {/* Left column: Form */}
          <div className="lead-reveal w-full max-w-lg justify-self-start lg:col-span-1">
            <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-md lg:p-10">
              <h2 className="mb-2 font-heading text-2xl font-normal text-white md:text-3xl">
                Schedule Consultation
              </h2>
              <p className="mb-8 text-white/70">
                Complete the form below and our team will reach out within 24
                hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-5">
                  <Input
                    label="Full Name"
                    name="name"
                    type="text"
                    required
                    placeholder="John Doe"
                    className="border-white/30 bg-transparent text-white placeholder:text-white/60 focus:border-emerald-400"
                    labelClassName="text-white"
                  />
                  <Input
                    label="Company Name"
                    name="company"
                    type="text"
                    required
                    placeholder="Company Inc."
                    className="border-white/30 bg-transparent text-white placeholder:text-white/60 focus:border-emerald-400"
                    labelClassName="text-white"
                  />
                  <Input
                    label="Work Email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@company.com"
                    className="border-white/30 bg-transparent text-white placeholder:text-white/60 focus:border-emerald-400"
                    labelClassName="text-white"
                  />
                  <Select
                    label="Company Size"
                    name="size"
                    required
                    options={[
                      { value: "50-500", label: "50-500 employees" },
                      { value: "500-1000", label: "500-1000 employees" },
                      { value: "1000-5000", label: "1000-5000 employees" },
                      { value: "5000+", label: "5000+ employees" },
                    ]}
                    className="border-white/30 bg-transparent text-white focus:border-emerald-400 [&>option]:text-gray-900"
                    labelClassName="text-white"
                  />
                  <Select
                    label="Service of Interest"
                    name="service"
                    required
                    options={[
                      { value: "consulting", label: "Energy Consulting" },
                      { value: "audit", label: "Energy Audit" },
                      { value: "both", label: "Both services" },
                    ]}
                    className="border-white/30 bg-transparent text-white focus:border-emerald-400 [&>option]:text-gray-900"
                    labelClassName="text-white"
                  />
                </div>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-full py-4 text-base font-medium"
                  disabled={loading}
                >
                  <RollingText>
                    {loading ? "Processing..." : "Submit Request"}
                  </RollingText>
                </Button>
              </form>
            </div>
          </div>

          {/* Right column: Slogan */}
          <div className="lead-reveal flex w-full max-w-xl items-center justify-self-end lg:col-span-1">
            <h3 className="font-heading text-5xl font-normal leading-[1.1] tracking-tight text-white lg:text-right lg:text-6xl">
              Empowering the future of enterprise with sustainable, intelligent
              energy solutions.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
