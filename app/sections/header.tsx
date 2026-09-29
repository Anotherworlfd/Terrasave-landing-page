"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { List, X } from "@phosphor-icons/react";

const centerLinks = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Why Us", href: "#why-us" },
];

const mobileLinks = [...centerLinks, { label: "Contact Us", href: "#contact" }];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      {/* Fading background layer: transparent over the hero, frosted glass once scrolled */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 -z-10 transition-all duration-500 ease-out ${
          scrolled
            ? "border-b border-gray-200/50 bg-white/85 opacity-100 shadow-sm backdrop-blur-md"
            : "border-b border-transparent bg-white/0 opacity-0"
        }`}
      />
      {/* Top gradient scrim keeps white text legible before the glass fades in */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-x-0 top-0 -z-10 h-28 bg-gradient-to-b from-black/45 via-black/25 to-transparent transition-opacity duration-500 ease-out ${
          scrolled ? "opacity-0" : "opacity-100"
        }`}
      />
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
        <nav className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <a
            href="#top"
            className={`font-heading text-xl font-bold tracking-tight transition-colors duration-500 ease-out md:text-2xl ${
              scrolled ? "text-gray-900" : "text-white"
            }`}
          >
            TerraSave
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 lg:flex">
            {centerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative group inline-block pb-1 text-sm font-medium transition-colors duration-300 after:absolute after:bottom-0 after:right-0 after:h-[2px] after:w-full after:scale-x-0 after:origin-right after:transition-transform after:duration-300 after:ease-out after:content-[''] group-hover:after:scale-x-100 group-hover:after:origin-left ${
                  scrolled
                    ? "text-gray-500 hover:text-gray-900 after:bg-emerald-600"
                    : "text-white/90 hover:text-white after:bg-emerald-400"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Contact Us */}
          <a
            href="#contact"
            className={`relative group hidden inline-block pb-1 text-sm font-medium transition-colors duration-300 after:absolute after:bottom-0 after:right-0 after:h-[2px] after:w-full after:scale-x-0 after:origin-right after:transition-transform after:duration-300 after:ease-out after:content-[''] group-hover:after:scale-x-100 group-hover:after:origin-left lg:block ${
              scrolled
                ? "text-gray-500 hover:text-gray-900 after:bg-emerald-600"
                : "text-white/90 hover:text-white after:bg-emerald-400"
            }`}
          >
            Contact Us
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            className={`p-2 transition-colors duration-500 ease-out lg:hidden ${
              scrolled ? "text-gray-900" : "text-white"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={26} /> : <List size={26} />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-white/10 bg-black/70 backdrop-blur-md lg:hidden"
          >
            <div className="mx-auto max-w-7xl space-y-1 px-4 py-6">
              {mobileLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-white transition-colors hover:bg-white/10"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}