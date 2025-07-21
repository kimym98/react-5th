import React from "react";

interface Props {
  label: string;
  onClick: () => void;
  items: string[];
}

function Child({ label, onClick, items }: Props) {
  return (
    <>
      <p>{label}</p>
      <button type="button" onClick={onClick}>
        자식 버튼
      </button>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </>
  );
}
//부모 컴포넌트만 변경되었을때 자식 컴포넌트를 기억하고 rerender를 방지함
//React.memo(자식컴포넌트)
//개발자도구의 profile(react 크롬도구가 필요)에서 렌더링 된 컴포넌트와 렌더링 시간을 확인할 수 있음
export default React.memo(Child);
