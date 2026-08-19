import React, { type ButtonHTMLAttributes, type ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline" | string;
  size?: "sm" | "md" | "lg" | string;
  fullWidth?: boolean;
  className?: string;
  children?: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  children,
  ...props
}) => {
  const baseClass = "btn";
  const variantClass = variant ? `btn--${variant}` : "";
  const sizeClass = size ? `btn--${size}` : "";
  const fullWidthClass = fullWidth ? "btn--full" : "";

  const combinedClasses = [
    baseClass,
    variantClass,
    sizeClass,
    fullWidthClass,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
