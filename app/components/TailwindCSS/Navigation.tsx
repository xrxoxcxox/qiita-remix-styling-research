import { ComponentPropsWithRef, forwardRef } from "react";

type Props = {
  className?: string;
} & ComponentPropsWithRef<"nav">;

export const Navigation = forwardRef<HTMLElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <nav className={className} {...props} ref={ref}>
        <a href="#" className="rounded-sm flex p-2 hover:bg-gray-50">
          <span className="material-icons-round text-gray-700">home</span>
          <span className="font-bold ml-2">ホーム</span>
        </a>
        <a href="#" className="rounded-sm flex p-2 hover:bg-gray-50 mt-2">
          <span className="material-icons-round text-gray-700">
            trending_up
          </span>
          <span className="font-bold ml-2">トレンド</span>
        </a>
        <a href="#" className="rounded-sm flex p-2 hover:bg-gray-50 mt-2">
          <span className="material-icons-round text-gray-700">
            notifications
          </span>
          <span className="font-bold ml-2">通知</span>
        </a>
      </nav>
    );
  }
);
