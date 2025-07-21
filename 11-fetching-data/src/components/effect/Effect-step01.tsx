import { useEffect, useState } from "react";

/* react life cycle
[1] 렌더링 시작
[2] DOM생성 및 그리기(commit 단계)
[3] useEffect 실행
[4] 사용자 인터렉션 -> 상태 변경 -> 다시 렌더링
[5] 기존 useEffect의 cleanup 실행 -> 새로운 useEffect 실행
*/

function Effect() {
  const [count, setCount] = useState(0);
  console.log("렌더링 됨");
  //dom의 커밋후 실행 됨 => onload 이벤트 느낌?
  //의존성배열로 빈배열을 추가하면 최초 렌더링 시 한번만 실행
  //의존성배열에 값을 넣으면 그 변수의 상태가 변하면 (값이 바뀌면) useEffect 실행
  //useEffect에서 return의 콜백함수가 클린업 함수 => 리렌더링 할때 없애는 역할?
  useEffect(() => {
    console.log("useEffect 실행");

    const id = setInterval(() => {
      console.log("hello~");
    }, 1000);
    return () => {
      console.log("useEffect 클린업");
      clearInterval(id);
    };
  }, [count]);

  return (
    <div>
      <p>카운트 : {count}</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        {" "}
        + 1
      </button>
    </div>
  );
}
export default Effect;
