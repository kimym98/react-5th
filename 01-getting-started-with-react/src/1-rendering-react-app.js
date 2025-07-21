import { createElement } from "./lib/react.js";
import { createRoot } from "./lib/react-dom.js";

const listData = {
  items: [
    { id: "1", title: "Life on Earth" },
    { id: "2", title: "Jupiter's massive storms" },
    { id: "3", title: "Explore Mars now" },
    { id: "4", title: "Moonlight and craters" },
  ],
};
const children = listData.items.map(({id,title})=>{

  return createElement("li", { className: "item",key:id},
    createElement("img", { src: `/planet/image-0${id}.jpg`, alt: "" }),
    createElement("span", { className: "content" }, title),
    createElement("button", { type: "button", title: "아이템 이동" },
      createElement("img", { src: "/icons/icon.svg", alt: "아이템 이동" })
    )
  );
})

const ulElement = createElement("ul", { className: "planet", lang: "en" },children);

const app = document.getElementById("app");

const root = createRoot(app);

function render(){

  root.render(ulElement);
}

render();

setTimeout(()=>{
  root.unmount();
},2000)