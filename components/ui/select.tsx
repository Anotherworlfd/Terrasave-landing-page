"use client";

import { SelectHTMLAttributes, forwardRef } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: { value: string; label: string }[];
  labelClassName?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, id, options, className = "", labelClassName = "", ...props }, ref) => {
    const selectId = id || label.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="flex flex-col gap-2">
        <label
          htmlFor={selectId}
          className={`text-sm font-medium text-gray-200 ${labelClassName}`}
        >
          {label}
        </label>
        <select
          ref={ref}
          id={selectId}
          className={`bg-transparent border-0 border-b-2 border-gray-300 px-0 py-3 text-white focus:border-emerald-600 focus:outline-none focus:ring-0 transition-colors ${className}`}
          {...props}
        >
          <option value="">Select an option</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;
