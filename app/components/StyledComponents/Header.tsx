import { ComponentPropsWithRef, forwardRef } from "react";
import styled from "styled-components";
import { Button } from "~/components/StyledComponents/Button";
import logoImage from "~/images/logotype.svg";

type Props = {
  className?: string;
} & ComponentPropsWithRef<"header">;

export const Header = forwardRef<HTMLElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <StyledHeader className={className} {...props} ref={ref}>
        <StyledHeaderInner>
          <StyledHeaderLogo>
            <img src={logoImage} width={116} height={24} alt="Logotype" />
          </StyledHeaderLogo>
          <StyledHeaderButton onClick={() => alert("新規作成")}>
            新規作成
          </StyledHeaderButton>
          <StyledHeaderIcon
            src="https://source.unsplash.com/random/80x80"
            width="40"
            height="40"
            alt="User Icon"
          />
        </StyledHeaderInner>
      </StyledHeader>
    );
  }
);

const StyledHeader = styled.header`
  background-color: var(--color-surface);
  display: flex;
  justify-content: center;
  padding: 12px 16px;
  position: sticky;
  top: 0;
  z-index: 1;
`;

const StyledHeaderInner = styled.div`
  align-items: center;
  display: flex;
  width: min(100%, var(--width-contents));
`;

const StyledHeaderLogo = styled.h1`
  align-items: center;
  display: flex;
`;

const StyledHeaderButton = styled(Button)`
  margin-left: auto;
`;

const StyledHeaderIcon = styled.img`
  border-radius: 50%;
  margin-left: 24px;
`;
