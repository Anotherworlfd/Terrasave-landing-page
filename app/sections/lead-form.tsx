"use client";

import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import Input from "@/components/ui/input";
import Select from "@/components/ui/select";
import Button from "@/components/ui/button";

const BACKGROUND_IMAGE =
  "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=2070&auto=format&fit=crop";

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
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
              <h2 className="mb-3 text-center text-2xl font-bold text-white md:text-3xl font-heading">
                Request Received
              </h2>
              <p className="text-center text-white/70">
                Thank you. A sustainability specialist will contact you within
                24 hours.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          {/* Left column: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 justify-self-start w-full max-w-lg"
          >
            <div className="rounded-3xl border border-white/20 bg-white/10 p-8 lg:p-10 shadow-2xl backdrop-blur-md">
              <h2 className="mb-2 text-2xl font-bold text-white md:text-3xl font-heading">
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
                    className="bg-transparent border-white/30 text-white placeholder:text-gray-400 focus:border-emerald-400"
                    labelClassName="text-gray-200"
                  />
                  <Input
                    label="Company Name"
                    name="company"
                    type="text"
                    required
                    placeholder="Company Inc."
                    className="bg-transparent border-white/30 text-white placeholder:text-gray-400 focus:border-emerald-400"
                    labelClassName="text-gray-200"
                  />
                  <Input
                    label="Work Email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@company.com"
                    className="bg-transparent border-white/30 text-white placeholder:text-gray-400 focus:border-emerald-400"
                    labelClassName="text-gray-200"
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
                    className="bg-transparent border-white/30 text-white focus:border-emerald-400 [&>option]:text-gray-900"
                    labelClassName="text-gray-200"
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
                    className="bg-transparent border-white/30 text-white focus:border-emerald-400 [&>option]:text-gray-900"
                    labelClassName="text-gray-200"
                  />
                </div>

                <Button
                  variant="primary"
                  type="submit"
                  className="w-full py-4 text-base font-medium"
                  disabled={loading}
                >
                  {loading ? "Processing..." : "Submit Request"}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Right column: Slogan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex items-center lg:col-span-1 justify-self-end w-full max-w-xl"
          >
            <h3
              className="text-5xl font-black leading-[1.1] tracking-tight text-white lg:text-6xl font-heading lg:text-right"
              style={{
                fontFamily: "var(--font-heading)",
              }}
            >
              Empowering the future of enterprise with sustainable, intelligent
              energy solutions.
            </h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
}