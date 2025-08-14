import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}

function Button_clsx({ children, size, className }: Props) {
  return (
    <button
      type="button"
      className={clsx(
        "bg-sky-500 px-4 py-2 rounded-xl",
        size === "sm" && "px-2 py-1 text-sm",
        size === "md" && "px-4 py-2 text-base",
        size === "lg" && "px-6 py-3 text-lg",
        className
      )}
    >
      {children}
    </button>
  );
}
export default Button_clsx;
