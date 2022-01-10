import clsx from "clsx";
import {
  ReactElement,
  ReactNode,
  ComponentPropsWithRef,
  forwardRef,
} from "react";
import styled from 'styled-components';

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
      <StyledButton className={clsx(variant, size, className)} {...props} ref={ref}>
        {children}
      </StyledButton>
    );
  }
);

const StyledButton = styled.button`
  border-color: transparent;
  border-radius: 2px;
  border-style: solid;
  border-width: 1px;
  font-weight: bold;
  padding: 7px 15px;
  &.fill {
    background-color: var(--color-primary);
    color: var(--color-light-text-high);
    &:hover {
      background-color: var(--color-primary-dark);
    }
  }
  &.border {
    border-color: var(--color-primary);
    color: var(--color-dark-text-medium);
    &:hover {
      background-color: var(--color-background);
      color: var(--color-dark-text-high);
    }
  }
  &.m {
    font-size: var(--font-size-body1);
  }
  &.s {
    font-size: var(--font-size-body3);
  }
`
