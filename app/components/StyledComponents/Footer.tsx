import { ReactElement, ComponentPropsWithRef, forwardRef } from "react";
import styled from "styled-components";

type Props = {
  className?: string;
} & ComponentPropsWithRef<"footer">;

export const Footer = forwardRef<HTMLElement, Props>(
  ({ className, ...props }, ref): ReactElement => {
    return (
      <StyledFooter className={className} {...props} ref={ref}>
        <StyledFooterLinks>
          <StyledFooterLink href="#">ヘルプ</StyledFooterLink>
          <StyledFooterLink href="#">利用規約</StyledFooterLink>
          <StyledFooterLink href="#">プライバシーポリシー</StyledFooterLink>
        </StyledFooterLinks>
        <StyledFooterCopyright>©2021 Logotype</StyledFooterCopyright>
      </StyledFooter>
    );
  }
);

const StyledFooter = styled.footer`
  color: var(--color-dark-text-medium);
  font-size: var(--font-size-body2);
`;

const StyledFooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledFooterLink = styled.a`
  color: inherit;
  margin-right: 16px;
  text-decoration: none;
  &:hover {
    color: var(--color-dark-text-high);
  }
`;

const StyledFooterCopyright = styled.small`
  display: block;
  margin-top: 8px;
`;
