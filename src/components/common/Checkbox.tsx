"use client";
import * as React from "react";
import { Checkbox as UICheckbox } from "@/components/ui/checkbox";
import { CheckboxProps as UICheckboxProps } from "@radix-ui/react-checkbox";
import { cn } from "@/lib/utils";

export interface CheckboxProps extends UICheckboxProps {
  color?: "primary" | "secondary" | "success" | "error" | "warning" | "info" | "neutral";
  label?: string;
}

export const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ className, color = "primary", label, ...props }, ref) => (
    <div className="inline-flex items-center gap-2 font-algecom">
      <UICheckbox
        ref={ref}
        className={cn(
          // تخصيص الألوان حسب المطلوب
          color === "primary" && "data-[state=checked]:bg-primary-900 data-[state=checked]:border-primary-900",
          color === "secondary" && "data-[state=checked]:bg-secondary-900 data-[state=checked]:border-secondary-900",
          color === "success" && "data-[state=checked]:bg-success-900 data-[state=checked]:border-success-900",
          color === "error" && "data-[state=checked]:bg-error-900 data-[state=checked]:border-error-900",
          color === "warning" && "data-[state=checked]:bg-warning-900 data-[state=checked]:border-warning-900",
          color === "info" && "data-[state=checked]:bg-info-900 data-[state=checked]:border-info-900",
          color === "neutral" && "data-[state=checked]:bg-neutral-400 data-[state=checked]:border-neutral-400",
          className
        )}
        {...props}
      />
      {label && <span className="text-sm">{label}</span>}
    </div>
  )
);
Checkbox.displayName = "Checkbox";