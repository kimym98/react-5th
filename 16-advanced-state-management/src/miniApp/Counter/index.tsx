import tw from "@/utils/tw";
import S from "./style.module.css";
import { memo, useMemo } from "react";
import { GrFormDown, GrFormUp } from "react-icons/gr";

import CountDisplay from "./CountDisplay";
import CountButton from "./CountButton";
import { useCountStore } from "./@store";
import { useShallow } from "zustand/shallow";

function Counter({ className }: { className?: string }) {
  // const { step } = useCountStore();
  //zustand v4+
  // const [count, step, min, max] = useCountStore((s) => [s.count, s.step, s.min, s.max]);

  //zustand v5+ useShallow를 사용해야한다 => 반응성 상실문제인듯?
  const [count, step, min, max] = useCountStore(
    useShallow((s) => [s.count, s.step, s.min, s.max])
  );

  // const step = 1;

  const incrementLabel = `${step} 증가`;
  const decrementLabel = `${step} 감소`;

  const isMinDisabled = count <= min;
  const isMaxDisabled = count >= max;

  return (
    <div className={tw(S.component, className)}>
      <CountDisplay />
      <div role="group" className={S.group}>
        <CountButton
          type="+"
          title={incrementLabel}
          aria-label={incrementLabel}
          disabled={isMaxDisabled}
        >
          {useMemo(
            () => (
              <GrFormUp />
            ),
            []
          )}
        </CountButton>

        <CountButton
          type="-"
          title={decrementLabel}
          aria-label={decrementLabel}
          disabled={isMinDisabled}
        >
          {useMemo(
            () => (
              <GrFormDown />
            ),
            []
          )}
        </CountButton>
      </div>
    </div>
  );
}
export default memo(Counter);
