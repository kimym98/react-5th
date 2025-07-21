import { type RefObject } from "react";

interface Props {
  placeholder: string;
  ref: RefObject<HTMLInputElement>;
}

const Child = ({ placeholder, ref }: Props) => {
  console.log(ref);
  return <input ref={ref} type="text" placeholder={placeholder} />;
};
export default Child;

//react19 이전
// const Child = forwardRef<HTMLInputElement, Props>(({ placeholder }, ref) => {
//   console.log(ref);
//   return <input ref={ref} type="text" placeholder={placeholder} />;
// });
// export default Child;
