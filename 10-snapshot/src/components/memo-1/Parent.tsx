import { useCallback, useMemo, useState } from "react";
import Child from "./Child";
//부모에서 count만 update하고 있는데
//Child까지 rerendering 됨

function Parent() {
  const [count, setCount] = useState(0);

  //Child를 React.memo로 기억해놨지만
  //부모가 rerender하면서 handleClick재선언하면서 props가 변경되어
  //자식도 rerender됨
  //   const handleClick = () => {
  //     console.log("clicked");
  //   };
  const handleClick = useCallback(() => {
    console.log("clicked");
  }, []);

  //useCallback = 함수에 사용  동일한 기능 useMemo = 데이터에 사용
  const fruits = useMemo(() => ["사과", "배", "바나나", "딸기"], []);

  return (
    <div>
      <h1>Parent Count : {count}</h1>
      <button type="button" onClick={() => setCount(count + 1)}>
        {" "}
        +1{" "}
      </button>
      <Child label="나는 자식이다." items={fruits} onClick={handleClick} />
    </div>
  );
}
export default Parent;

/*
자식에게 함수를 넘길 때 useCallback => 함수를 prop으로 넘길 때 참조 유지
자식에게 배열/객체 넘길 때 useMemo => 배열/객체/계산값을 prop으로 넘길 때 참조 유지
자식 컴포넌트를 최적화할 때 React.memo => 컴포넌트 리렌더링 최적화
*/
