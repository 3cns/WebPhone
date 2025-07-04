"use client";

import { ReactNode } from "react";
import { RadioButton } from "./radio-button";

interface RadioOption<T> {
  value: T;
  label: string;
  description?: string;
  disabled?: boolean;
}

interface RadioButtonGroupProps<T> {
  options: RadioOption<T>[];
  value?: T;
  onChange?: (value: T) => void;
  name: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "success" | "warning" | "error";
  disabled?: boolean;
  className?: string;
  orientation?: "vertical" | "horizontal";
  label?: string;
  description?: string;
}

export function RadioButtonGroup<T>({
  options,
  value,
  onChange,
  name,
  size = "md",
  variant = "primary",
  disabled = false,
  className = "",
  orientation = "vertical",
  label,
  description,
}: RadioButtonGroupProps<T>) {
  const handleChange = (optionValue: T) => {
    if (!disabled && onChange) {
      onChange(optionValue);
    }
  };

  return (
    <div className={className}>
      {(label || description) && (
        <div className="mb-3">
          {label && (
            <label
              className={`
                block text-sm font-medium
                ${disabled ? "text-gray-400" : "text-gray-700"}
              `}
            >
              {label}
            </label>
          )}
          {description && (
            <p
              className={`
                mt-1 text-sm
                ${disabled ? "text-gray-400" : "text-gray-500"}
              `}
            >
              {description}
            </p>
          )}
        </div>
      )}
      <div
        role="radiogroup"
        className={`
          ${
            orientation === "vertical"
              ? "space-x-4 flex flex-wrap"
              : "space-y-3"
          }
        `}
      >
        {options.map((option) => (
          <RadioButton
            key={String(option.value)}
            name={name}
            value={String(option.value)}
            label={option.label}
            description={option.description}
            checked={value === option.value}
            onChange={() => handleChange(option.value)}
            size={size}
            variant={variant}
            disabled={disabled || option.disabled}
          />
        ))}
      </div>
    </div>
  );
}
