import { ComponentPropsWithRef, forwardRef } from "react";

export type Data = { title: string; url: string }[];

type Props = {
  dataset: Data;
  className?: string;
} & ComponentPropsWithRef<"div">;

export const Ranking = forwardRef<HTMLDivElement, Props>(
  ({ dataset, className, ...props }, ref) => {
    return (
      <div className={`bg-white rounded-sm flex flex-col p-4 ${className}`} {...props} ref={ref}>
        <h2 className="text-xl">ランキング</h2>
        <ol className="pl-7">
          {dataset.map((data) => (
            <li key={data.title} className="mt-4">
              <a href={data.url} className="block ml-2">
                {data.title}
              </a>
            </li>
          ))}
        </ol>
      </div>
    );
  }
);
