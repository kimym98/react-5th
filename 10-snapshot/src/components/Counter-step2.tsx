import { useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);

  const handleClick = () => {
    //이전의 값을 업데이트 하고 싶다면
    //callBack으로 넘겨준다.
    setNumber((n) => n + 1);
    // setNumber((n) => n + 1);
    // setNumber((n) => n + 1);
    setNumber(40);
  };

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
