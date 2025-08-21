import { useCallback, useState } from "react";

function useCounter({
  count: initalCount = 0,
  step = 1,
  min = 0,
  max = 10,
} = {}) {
  const [count, setCount] = useState(initalCount);
  const isMinDisabled = count <= min;
  const isMaxDisabled = count >= max;

  const reset = useCallback(() => setCount(initalCount), [initalCount]);

  const increment = useCallback(
    () =>
      setCount((c) => {
        let nextCount = c + step;
        if (nextCount >= max) nextCount = max;
        return nextCount;
      }),
    [max, step]
  );
  const decrement = useCallback(
    () =>
      setCount((c) => {
        let nextCount = c - step;
        if (nextCount <= min) nextCount = min;
        return nextCount;
      }),
    [min, step]
  );
  return {
    count,
    step,
    isMinDisabled,
    isMaxDisabled,
    increment,
    decrement,
    reset,
  };
}

export default useCounter;
