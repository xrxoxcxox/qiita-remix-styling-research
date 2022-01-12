import { ComponentPropsWithRef, forwardRef } from "react";
import styled from "styled-components";

type Props = {
  className?: string;
} & ComponentPropsWithRef<"nav">;

export const Navigation = forwardRef<HTMLElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <nav className={className} {...props} ref={ref}>
        <StyledNavigationLink href="#">
          <StyledNavigationLinkIcon>home</StyledNavigationLinkIcon>
          <StyledNavigationLinkText>ホーム</StyledNavigationLinkText>
        </StyledNavigationLink>
        <StyledNavigationLink href="#">
          <StyledNavigationLinkIcon>trending_up</StyledNavigationLinkIcon>
          <StyledNavigationLinkText>トレンド</StyledNavigationLinkText>
        </StyledNavigationLink>
        <StyledNavigationLink href="#">
          <StyledNavigationLinkIcon>notifications</StyledNavigationLinkIcon>
          <StyledNavigationLinkText>通知</StyledNavigationLinkText>
        </StyledNavigationLink>
      </nav>
    );
  }
);

const StyledNavigationLink = styled.a`
  border-radius: 2px;
  color: inherit;
  display: flex;
  padding: 8px;
  text-decoration: none;
  &:hover {
    background-color: #e0e0e0;
  }
  & + & {
    margin-top: 4px;
  }
`;

const StyledNavigationLinkIcon = styled.span.attrs(() => ({
  className: "material-icons-round",
}))`
  color: var(--color-dark-text-medium);
`;

const StyledNavigationLinkText = styled.span`
  font-weight: bold;
  margin-left: 8px;
`;
