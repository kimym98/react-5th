import { type ButtonHTMLAttributes, memo } from "react";
import S from "./style.module.css";

function CountButton_({
  children,
  onUpdate,
  ...restProps
}: ButtonHTMLAttributes<HTMLButtonElement> & { onUpdate: () => void }) {
  return (
    <button
      type="button"
      className={S.button}
      {...restProps}
      onClick={onUpdate}
    >
      {children}
    </button>
  );
}
export default memo(CountButton_);
