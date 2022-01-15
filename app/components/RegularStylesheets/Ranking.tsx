import { ComponentPropsWithRef, forwardRef } from "react";
import styles from "~/styles/ranking.css";

export type Data = { title: string; url: string }[];

type Props = {
  dataset: Data;
  className?: string;
} & ComponentPropsWithRef<"div">;

export const links = () => [{ rel: "stylesheet", href: styles }];

export const Ranking = forwardRef<HTMLDivElement, Props>(
  ({ dataset, className, ...props }, ref) => {
    return (
      <div className={`ranking ${className}`} {...props} ref={ref}>
        <h2 className="ranking__headline">ランキング</h2>
        <ol className="ranking__list">
          {dataset.map((data) => (
            <li key={data.title} className="ranking__listItem">
              <a href={data.url} className="ranking__link">
                {data.title}
              </a>
            </li>
          ))}
        </ol>
      </div>
    );
  }
);
