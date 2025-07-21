import { PlanetItem } from "../components/planet/PlanetItem.js";
import { PlanetList } from "../components/planet/PlanetList.js";
import { listData } from "../data/data.js";
import React, { createElement as h } from "../lib/react.js";

// 3. PlanetPage

export class PlanetPage extends React.Component {
  render() {
    return h(PlanetList, {
      lang: "en",
      children: listData.items.map(({ id, title }) =>
        h(PlanetItem, { key: id, id, title })
      ),
    });
  }
}
