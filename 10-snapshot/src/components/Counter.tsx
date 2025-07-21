import { useCallback, useState } from "react";
function slow() {
  console.log("작업중");

  let sum = 0;

  for (let i = 0; i < 10000; i++) {
    sum += i;
  }
  return sum;
}
function Counter() {
  //useState의 초기값을 callBack로 전달하면 rerender할때마다
  //slow함수를 재호출하지 않는다.
  const [number, setNumber] = useState(() => slow());
  // const [number, setNumber] = useState(slow); 콜백과 동일

  // useCallback => 함수를 기억해주는 리액트 훅
  // 인수로 2개를 넘겨주면 되고 useCallback(()=>{}(함수),[](종속성 배열))
  // handleClick 한번만 선언하고 리렌더할때마다 선언하지 않음 => 함수가 이미 존재하면 재선언하지않는다.
  // 종속성 배열에 넣은 변수가 변경되면 함수 다시 생성
  const handleClick = useCallback(() => {
    setNumber(number + 1);
  }, [number]);

  return (
    <>
      <h1>{number}</h1>
      <button type="button" onClick={handleClick}>
        {" "}
        +{" "}
      </button>
    </>
  );
}

export default Counter;
