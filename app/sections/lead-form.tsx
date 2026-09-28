"use client";

import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import Input from "@/components/ui/input";
import Select from "@/components/ui/select";
import Button from "@/components/ui/button";

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
      <section className="bg-emerald-50 py-16 md:py-24 px-4 md:px-8 lg:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-10 md:p-12">
              <div className="mb-4">
                <svg
                  className="w-16 h-16 text-emerald-600 mx-auto"
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
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 font-syne">
                Request Received
              </h2>
              <p className="text-gray-700">
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
      className="bg-emerald-50 py-16 md:py-24 px-4 md:px-8 lg:px-12"
    >
      <div className="max-w-xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 font-syne">
              Schedule Consultation
            </h2>
            <p className="text-gray-600 mb-8">
              Complete the form below and our team will reach out within 24
              hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <Input
                  label="Full Name"
                  name="name"
                  type="text"
                  required
                  placeholder="John Doe"
                />
                <Input
                  label="Company Name"
                  name="company"
                  type="text"
                  required
                  placeholder="Company Inc."
                />
                <Input
                  label="Work Email"
                  name="email"
                  type="email"
                  required
                  placeholder="john@company.com"
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
      </div>
    </section>
  );
}