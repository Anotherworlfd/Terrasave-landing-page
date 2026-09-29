"use client";

import { motion } from "motion/react";
import {
  LinkedinLogo,
  TwitterLogo,
  FacebookLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";

const footerLinks = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Energy Consulting", href: "#services" },
      { label: "Energy Audits", href: "#services" },
      { label: "ESG Roadmaps", href: "#services" },
      { label: "Monitoring", href: "#services" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Case Studies", href: "#" },
      { label: "White Papers", href: "#" },
      { label: "Blog", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "GDPR", href: "#" },
    ],
  },
];

const socialLinks = [
  { icon: LinkedinLogo, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: TwitterLogo, href: "https://twitter.com", label: "Twitter" },
  { icon: FacebookLogo, href: "https://facebook.com", label: "Facebook" },
  { icon: YoutubeLogo, href: "https://youtube.com", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 px-4 py-12 text-white md:px-8 md:py-16 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Top: Logo + Social */}
        <div className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div>
            <h2 className="font-heading text-3xl font-normal tracking-tight md:text-4xl">
              TerraSave
            </h2>
            <p className="mt-3 max-w-sm text-sm text-gray-400">
              Commercial green energy consulting and B2B audit services for
              forward-thinking enterprises.
            </p>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-emerald-600"
              >
                <s.icon size={20} weight="fill" />
              </a>
            ))}
          </div>
        </div>

        {/* Middle: Link columns */}
        <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-12 md:grid-cols-4">
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-300 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom: Copyright */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} TerraSave. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}