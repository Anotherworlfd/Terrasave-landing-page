"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";

type PillButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

const PillButton = forwardRef<HTMLButtonElement, PillButtonProps>(
  ({ className = "", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`group relative inline-flex items-center justify-between gap-6 overflow-hidden rounded-full bg-white pl-8 pr-1 py-1 shadow-sm transition-all ${className}`}
        {...props}
      >
        {/* Sweeping green background */}
        <span
          aria-hidden="true"
          className="absolute right-0 top-0 bottom-0 z-0 w-12 rounded-full bg-emerald-600 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:w-[101%] group-hover:scale-x-105 origin-right"
        />

        {/* Button text */}
        <span className="relative z-10 font-semibold text-gray-900 transition-colors duration-500 group-hover:text-white">
          {children}
        </span>

        {/* Icon wrapper */}
        <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </span>
      </button>
    );
  }
);

PillButton.displayName = "PillButton";

export default PillButton;
