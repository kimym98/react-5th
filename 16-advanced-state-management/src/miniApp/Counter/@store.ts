import { create } from "zustand";
/*
set - update
get - read
store - 가진 것 모두 전부

*/
type Store = {
  count: number;
  step: number;
  max: number;
  min: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  setStep: (newStep: number) => void;
};

//타입을 정의후 제네릭으로 사용하고 () 실행해야한다.
//craet()() curring function
// export const useCountStore = create<Store>()((set) => ({
//   count: 1,
//   step: 1,
//   //상태를 변경할땐 set을 사용해야함
//   increment: () => set((state) => ({ count: state.count + 1 })),
//   decrement: () => set((state) => ({ count: state.count - 1 })),
// }));

export const useCountStore = create<Store>()((set, _get, store) => {
  const increment = () => {
    set(({ count, step, max }) => {
      let nextCount = count + step;
      if (nextCount >= max) nextCount = max;
      return { count: nextCount };
    });
  };
  const decrement = () => {
    set(({ count, step, min }) => {
      let nextCount = count - step;
      if (nextCount <= min) nextCount = min;
      return { count: nextCount };
    });
  };
  const setStep = (newStep: number) => {
    set({ step: newStep });
  };
  //reset해야하는 항목이 많아지면  store.getInitialState으로 초기화 할 수 있다.
  const reset = () => set(store.getInitialState());
  return {
    count: 0,
    step: 1,
    min: 0,
    max: 10,
    increment,
    decrement,
    setStep,
    reset,
  };
});
