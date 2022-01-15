import { ReactNode, ComponentPropsWithRef, forwardRef } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  size?: "m" | "s";
  variant?: "fill" | "border";
} & ComponentPropsWithRef<"button">;

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, className, size = "m", variant = "fill", ...props }, ref) => {
    const sizeStyle = size === "m" ? "text-base" : "text-sm";
    const variantStyle =
      variant === "fill"
        ? "text-white bg-violet-700 hover:bg-violet-800 border-transparent"
        : "text-gray-700 hover:text-black bg-white border-violet-700";
    return (
      <button
        className={`font-bold px-4 py-2 rounded border-2 border-solid ${sizeStyle} ${variantStyle} ${className}`}
        {...props}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);
