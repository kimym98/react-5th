import { useState } from "react";

function Form() {
  const [text, setText] = useState("");
  return (
    <div>
      <h2>Controlled Input</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>입력 값 : {text}</p>
      <hr />
      <h2>Uncontrolled Input</h2>
      <input
        type="text"
        defaultValue={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>입력 값 : {text}</p>
    </div>
  );
}
export default Form;
/*
Controlled
Uncontrolled - 리액트과 관리하지않는 컴포넌트

value - 리액트로 통제
defaultValue - 외부상태와 무관하게 DOM자체를 제어해야할때
ex) change이벤트를 뻈을 때 위의 input은 리액트가 통제를 하기 때문에 작성이 안됨 아래는 작성이 됨 
 */
