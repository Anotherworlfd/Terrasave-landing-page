"use client";

import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  labelClassName?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, className = "", labelClassName = "", ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="flex flex-col gap-2">
        <label
          htmlFor={inputId}
          className={`text-sm font-medium text-gray-700 ${labelClassName}`}
        >
          {label}
        </label>
        <input
          ref={ref}
          id={inputId}
          className={`bg-transparent border-0 border-b-2 border-gray-300 px-0 py-3 text-gray-900 placeholder:text-gray-400 focus:border-emerald-600 focus:outline-none focus:ring-0 transition-colors ${className}`}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
