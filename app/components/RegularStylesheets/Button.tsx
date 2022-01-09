import {
  ReactElement,
  ReactNode,
  ComponentPropsWithRef,
  forwardRef,
} from "react";
import styles from "~/styles/button.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

type Props = {
  children: ReactNode;
  className?: string;
  size?: "m" | "s";
  variant?: "fill" | "border";
} & ComponentPropsWithRef<"button">;

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({
    children,
    className,
    size = "m",
    variant = "fill",
    ...props
  }, ref): ReactElement => {
    return (
      <button className={`button ${variant} ${size} ${className}`} {...props} ref={ref}>
        {children}
      </button>
    );
  }
);
