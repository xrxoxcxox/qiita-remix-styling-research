import { ComponentPropsWithRef, forwardRef } from "react";
import styles from "~/styles/footer.css";

type Props = {
  className?: string;
} & ComponentPropsWithRef<"footer">;

export const links = () => [{ rel: "stylesheet", href: styles }];

export const Footer = forwardRef<HTMLElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <footer className={`footer ${className}`} {...props} ref={ref}>
        <div className="footer__links">
          <a href="#" className="footer__link">
            ヘルプ
          </a>
          <a href="#" className="footer__link">
            利用規約
          </a>
          <a href="#" className="footer__link">
            プライバシーポリシー
          </a>
        </div>
        <small className="footer__copyright">©2021 Logotype</small>
      </footer>
    );
  }
);
