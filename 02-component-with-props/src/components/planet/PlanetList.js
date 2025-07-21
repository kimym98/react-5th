import React, { createElement as h } from "../../lib/react.js";

// 2. PlanetList => [children은 배열(virtualDOM을 담은)로 전달될 수 있다]

export class PlanetList extends React.Component {
  render() {
    const { lang, children } = this.props;

    return h("ul", { className: "planet", lang }, children);
  }
}
