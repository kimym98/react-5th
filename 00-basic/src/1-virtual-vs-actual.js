import { createElement, isValidElement } from "./lib/virtual/index.js";
import { createRoot } from "./lib/virtual-dom/index.js";

/*
virtual DOM
가상 문서 객체 모델
실제 DOM을 추상화 (단순화)
 */

/*actual DOM -----------------------------------*/
/*
실제 DOM 구성(엘리먼트 트리)
웹 API 사용해서 문서 객체 (document object) 생성

*/
//부모 요소
const divElement = document.createElement("div");

//자식 요소
const buttonElement = document.createElement("button");

//자식 요소 속성 설정
buttonElement.setAttribute("type", "button");

//자식 요소 컨텐츠 설정
buttonElement.textContent = "hello😒";

//요소간 관계 형성
divElement.append(buttonElement);

//실제 DOM에 마운트(mount, 착장===렌더링)
const actualDomElement = document.getElementById("app");

actualDomElement.append(divElement);

/*virtual DOM ---------------------------------------------------- */

//API : createElement(type,props, ...children)
const buttonV_Element = createElement(
  "button",
  { type: "button", "aria-label": "인사말" },
  "hola👍"
);
const divV_Element = createElement(
  "div",
  { className: "tiger" },
  buttonV_Element
);

const virtualDomElement = document.getElementById("app");
const vRoot = createRoot(virtualDomElement);

vRoot.render(divV_Element);

isValidElement(divElement);
isValidElement(divV_Element);
