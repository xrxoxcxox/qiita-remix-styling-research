import { ComponentPropsWithRef, forwardRef } from "react";
import { Button } from "~/components/TailwindCSS/Button";
import logoImage from "~/images/logotype.svg";

type Props = {
  className?: string;
} & ComponentPropsWithRef<"header">;

export const Header = forwardRef<HTMLElement, Props>(
  ({ className, ...props }, ref) => {
    return (
      <header className={`bg-white flex justify-center py-3 px-4 sticky top-0 z-10 ${className}`} {...props} ref={ref}>
        <div className="flex items-center w-full max-w-screen-lg">
          <h1 className="flex items-center">
            <img src={logoImage} width={116} height={24} alt="Logotype" />
          </h1>
          <Button className="ml-auto" onClick={() => alert("新規作成")}>
            新規作成
          </Button>
          <img
            src="https://source.unsplash.com/random/80x80"
            width="40"
            height="40"
            alt="User Icon"
            className="ml-6 rounded-full"
          />
        </div>
      </header>
    );
  }
);
