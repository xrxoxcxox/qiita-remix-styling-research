import { ComponentPropsWithRef, forwardRef } from "react";

type Props = {
  className?: string;
} & ComponentPropsWithRef<"footer">;

export const Footer = forwardRef<HTMLElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <footer className={`text-gray-700 text-sm ${className}`} {...props} ref={ref}>
        <div className="flex flex-wrap">
          <a href="#" className="mr-4 hover:text-black">
            ヘルプ
          </a>
          <a href="#" className="mr-4 hover:text-black">
            利用規約
          </a>
          <a href="#" className="mr-4 hover:text-black">
            プライバシーポリシー
          </a>
        </div>
        <small className="block mt-2">©2021 Logotype</small>
      </footer>
    );
  }
);
