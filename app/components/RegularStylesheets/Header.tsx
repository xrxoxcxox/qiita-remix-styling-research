import { ComponentPropsWithRef, forwardRef } from "react";
import {
  Button,
  links as buttonLinks,
} from "~/components/RegularStylesheets/Button";
import logoImage from "~/images/logotype.svg";
import styles from "~/styles/header.css";

type Props = {
  className?: string;
} & ComponentPropsWithRef<"header">;

export const links = () => [
  ...buttonLinks(),
  { rel: "stylesheet", href: styles },
];

export const Header = forwardRef<HTMLElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <header className={`header ${className}`} {...props} ref={ref}>
        <div className="header__inner">
          <h1 className="header__logo">
            <img src={logoImage} width={116} height={24} alt="Logotype" />
          </h1>
          <Button className="header__button" onClick={() => alert("新規作成")}>
            新規作成
          </Button>
          <img
            src="https://source.unsplash.com/random/80x80"
            width="40"
            height="40"
            alt="User Icon"
            className="header__icon"
          />
        </div>
      </header>
    );
  }
);
