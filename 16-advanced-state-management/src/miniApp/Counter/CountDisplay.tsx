import S from "./style.module.css";
import { useCountStore } from "./@store";

function CountDisplay() {
  // const { count } = useCountStore();
  const count = useCountStore((s) => s.count);

  return <output className={S.output}>{count}</output>;
}
export default CountDisplay;
