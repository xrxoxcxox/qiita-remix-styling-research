import { ComponentPropsWithRef, forwardRef } from "react";
import { Button } from "~/components/RegularStylesheets/Button";
import styles from "~/styles/feed-item.css";

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

export const links = () => [{ rel: "stylesheet", href: styles }];

export const FeedItem = forwardRef<HTMLElement, Props>(
  ({ data, className, ...props }, ref) => {
    const { thumbnail, date, title, favorites, comments, url } = data;
    return (
      <article className={`feed-item ${className}`} {...props} ref={ref}>
        {thumbnail && (
          <a href={url} className="feed-item__thumbnailWrapper">
            <img src={thumbnail} alt="" className="feed-item__thumbnail" />
          </a>
        )}
        <div className="feed-item__information">
          <a href={url} className="feed-item__link">
            <time dateTime={date} className="feed-item__postedAt">
              {date}
            </time>
            <h3 className="feed-item__title">{title}</h3>
          </a>
          <div className="feed-item__reactions">
            <span className={`material-icons-round feed-item__reactionIcon`}>
              favorite
            </span>
            <span className="feed-item__reactionCount">{favorites}</span>
            <span className={`material-icons-round feed-item__reactionIcon`}>
              mode_comment
            </span>
            <span className="feed-item__reactionCount">{comments}</span>
            <Button
              size="s"
              variant="border"
              className="feed-item__button"
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
