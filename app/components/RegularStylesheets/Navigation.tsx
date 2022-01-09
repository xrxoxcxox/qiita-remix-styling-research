import { ReactElement, ComponentPropsWithRef, forwardRef } from "react";
import styles from "~/styles/navigation.css";

type Props = {
  className?: string;
} & ComponentPropsWithRef<"nav">;

export const links = () => [{ rel: "stylesheet", href: styles }];

export const Navigation = forwardRef<HTMLElement, Props>(
  ({ className, ...props }, ref): ReactElement => {
    return (
      <nav className={className} {...props} ref={ref}>
        <a href="#" className="navigation__link">
          <span className={`material-icons-round navigation__linkIcon`}>
            home
          </span>
          <span className="navigation__linkText">ホーム</span>
        </a>
        <a href="#" className="navigation__link">
          <span className={`material-icons-round navigation__linkIcon`}>
            trending_up
          </span>
          <span className="navigation__linkText">トレンド</span>
        </a>
        <a href="#" className="navigation__link">
          <span className={`material-icons-round navigation__linkIcon`}>
            notifications
          </span>
          <span className="navigation__linkText">通知</span>
        </a>
      </nav>
    );
  }
);
