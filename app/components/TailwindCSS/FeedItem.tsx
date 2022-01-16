import { ComponentPropsWithRef, forwardRef } from "react";
import { Button } from "~/components/TailwindCSS/Button";

export type Data = {
  thumbnail?: string;
  date: string;
  title: string;
  favorites: number;
  comments: number;
  url: string;
};

type Props = {
  data: Data;
  className?: string;
} & ComponentPropsWithRef<"article">;

export const FeedItem = forwardRef<HTMLElement, Props>(
  ({ data, className, ...props }, ref) => {
    const { thumbnail, date, title, favorites, comments, url } = data;
    return (
      <article className={`bg-white rounded ${className}`} {...props} ref={ref}>
        {thumbnail && (
          <a href={url}>
            <img src={thumbnail} alt="" className="aspect-video object-cover w-full"/>
          </a>
        )}
        <div className="p-4">
          <a href={url}>
            <time dateTime={date} className="text-gray-700 block text-xs">
              {date}
            </time>
            <h3 className="text-2xl mt-2">{title}</h3>
          </a>
          <div className="items-center flex mt-2">
            <span className="material-icons-round text-gray-700 text-base">
              favorite
            </span>
            <span className="text-sm ml-2">{favorites}</span>
            <span className="material-icons-round text-gray-700 text-base ml-6">
              mode_comment
            </span>
            <span className="text-sm ml-2">{comments}</span>
            <Button
              size="s"
              variant="border"
              className="ml-auto"
              onClick={() => alert(`「${title}」を保存`)}
            >
              保存
            </Button>
          </div>
        </div>
      </article>
    );
  }
);
