// This extends the shadcn Button with your custom variants
import { Button as ShadcnButton } from "@/components/ui/button";
import { type ButtonProps as ShadcnButtonProps } from "@/components/ui/button";
import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// Define the button variants using class-variance-authority
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        // Primary variants
        primary: "bg-primary-900 text-white hover:bg-primary-700",
        "primary-outline": "border border-primary-900 text-primary-900 bg-transparent hover:bg-primary-100",
        "primary-ghost": "text-primary-900 hover:bg-primary-100",

        // Secondary variants
        secondary: "bg-secondary-900 text-white hover:bg-secondary-700",
        "secondary-outline": "border border-secondary-900 text-secondary-900 bg-transparent hover:bg-secondary-100",
        "secondary-ghost": "text-secondary-900 hover:bg-secondary-100",

        // Success variants
        success: "bg-success-900 text-white hover:bg-success-700",
        "success-outline": "border border-success-900 text-success-900 bg-transparent hover:bg-success-100",
        "success-ghost": "text-success-900 hover:bg-success-100",

        // Error variants
        error: "bg-error-900 text-white hover:bg-error-700",
        "error-outline": "border border-error-900 text-error-900 bg-transparent hover:bg-error-100",
        "error-ghost": "text-error-900 hover:bg-error-100",

        // Gray variants
        gray: "bg-neutral-300 text-neutral-900 hover:bg-neutral-400",
        "gray-outline": "border border-neutral-300 text-neutral-900 bg-transparent hover:bg-neutral-100",
        "gray-ghost": "text-neutral-900 hover:bg-neutral-100",

        // White variants
        white: "bg-white text-neutral-900 hover:bg-neutral-100",
        "white-outline": "border border-white text-neutral-900 bg-transparent hover:bg-neutral-100",
        "white-ghost": "text-neutral-900 hover:bg-neutral-100",

        // Default fallback to shadcn variants
        default: "",
        destructive: "",
        outline: "",
        ghost: "",
        link: "",
      },
      size: {
        xs: "h-7 px-2 text-xs rounded",
        sm: "h-8 px-3 text-sm rounded-md",
        md: "h-10 px-4 py-2 text-sm rounded-md",
        lg: "h-12 px-6 py-2 text-base rounded-lg",
        xl: "h-14 px-8 py-3 text-lg rounded-lg",
        "2xl": "h-16 px-10 py-3 text-xl rounded-xl",
      },
      withIcon: {
        true: "gap-2",
      },
      isFullWidth: {
        true: "w-full",
      },
      isRounded: {
        true: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      withIcon: false,
      isFullWidth: false,
      isRounded: false,
    },
  }
);

// Define the props for our custom button
export interface ButtonProps 
  extends Omit<ShadcnButtonProps, "className" | "asChild" | "size">, 
    VariantProps<typeof buttonVariants> {
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    withIcon,
    isFullWidth,
    isRounded,
    leftIcon, 
    rightIcon,
    loading,
    disabled,
    children, 
    ...props 
  }, ref) => {
    const isDisabled = disabled || loading;

    // Create buttonProps object without custom props
    const buttonProps = {
      className: cn(
        buttonVariants({ 
          variant, 
          size, 
          withIcon: !!(leftIcon || rightIcon), 
          isFullWidth,
          isRounded,
          className 
        })
      ),
      disabled: isDisabled,
      ref,
      ...props
    };

    // Filter out our custom props from reaching DOM
    const {
      leftIcon: _leftIcon,
      rightIcon: _rightIcon,
      loading: _loading,
      isFullWidth: _isFullWidth,
      isRounded: _isRounded,
      ...domProps
    } = props;

    return (
      <ShadcnButton 
        {...buttonProps}
        {...domProps}
      >
        {loading ? (
          <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : leftIcon ? (
          <span className="mr-2">{leftIcon}</span>
        ) : null}
        {children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </ShadcnButton>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };