"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | "light";
  children: React.ReactNode;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", className = "", children, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

    const variants = {
      // emerald-700 + white text = 5.3:1, passes WCAG AA for body text
      primary:
        "bg-emerald-700 text-white hover:bg-emerald-800 active:scale-[0.98]",
      ghost:
        "border border-white/30 text-white hover:bg-white/10 active:scale-[0.98]",
      light:
        "bg-white text-emerald-800 hover:bg-emerald-50 active:scale-[0.98]",
    };

    return (
      <button
        ref={ref}
        className={`${base} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;