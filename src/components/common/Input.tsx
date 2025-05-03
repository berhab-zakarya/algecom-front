"use client";
import * as React from "react";
import { Input as UIInput } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  error?: string;
  label?: string;
  variant?: "default" | "primary" | "secondary" | "error" | "success";
  size?: "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg" | "xl" | "full";
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      leftIcon,
      rightIcon,
      error,
      label,
      variant = "default",
      size = "md",
      radius = "full",
      ...props
    },
    ref
  ) => (
    <div className="w-full space-y-1.5">
      {label && (
        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          {label}
        </label>
      )}
      <div
        className={cn(
          "relative flex items-center font-algecom",
          // Custom variants
          variant === "primary" && "border-primary-900 focus-within:border-primary-700",
          variant === "secondary" && "border-secondary-900 focus-within:border-secondary-700",
          variant === "error" && "border-error-900 focus-within:border-error-700",
          variant === "success" && "border-success-900 focus-within:border-success-700",
          variant === "default" && "border-neutral-300 focus-within:border-primary-900",
          // Size
          size === "sm" && "h-8 text-xs",
          size === "md" && "h-10 text-sm",
          size === "lg" && "h-12 text-base px-4",
          // Radius
          radius === "none" && "rounded-none",
          radius === "sm" && "rounded-sm",
          radius === "md" && "rounded-md",
          radius === "lg" && "rounded-lg",
          radius === "xl" && "rounded-xl",
          radius === "full" && "rounded-full",
          "border px-3 py-2 transition-colors w-full bg-white",
          className
        )}
      >
        {leftIcon && (
          <>
            <span className="flex items-center pr-2 h-full text-primary-900">{leftIcon}</span>
            <span className="h-6 w-px bg-neutral-300 mx-2" />
          </>
        )}
        <UIInput
          ref={ref}
          className={cn(
            "flex-1 bg-transparent border-0 focus:ring-0 outline-none placeholder:text-neutral-400",
            leftIcon && "pl-0",
            rightIcon && "pr-10"
          )}
          style={{ boxShadow: "none" }} // يمنع ظهور المستطيل الصغير
          {...props}
        />
        {rightIcon && (
          <>
            <span className="h-6 w-px bg-neutral-300 mx-2 absolute right-9 top-1/2 -translate-y-1/2" />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400">
              {rightIcon}
            </span>
          </>
        )}
      </div>
      {error && <p className="text-sm text-error-900">{error}</p>}
    </div>
  )
);

Input.displayName = "Input";