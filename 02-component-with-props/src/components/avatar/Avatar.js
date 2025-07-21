import React, { createElement as h } from "../../lib/react.js";

// type Props = {
//   name : String;
//   status ?: 'online' | 'offline' | 'away' | 'dont-disturb';
//   size ?: Number;
// }

export default function Avatar({ profil, status = "offline", size = 64 }) {
  let iconPath = "";
  let statusMessage = "";
  switch (status) {
    case "offline":
      iconPath = "/icons/status-offline.svg";
      statusMessage = "오프라인";
      break;
    case "online":
      iconPath = "/icons/status-online.svg";
      statusMessage = "온라인";
      break;
    case "dont-disturb":
      iconPath = "/icons/status-dont-disturb.svg";
      statusMessage = "방해금지";
      break;
    case "away":
      iconPath = "/icons/status-away.svg";
      statusMessage = "자리비움";
      break;
  }
  const label = `${profil} (${statusMessage})`;
  return h(
    "li",
    { className: "avatar" },
    h(
      "figure",
      { "aria-label": label, title: label },
      h(
        "div",
        { className: "cover" },
        h("img", { src: `/avatar/${profil}.png`, alt: "" })
      ),
      h("figcaption", null, h("img", { src: iconPath, alt: "" }))
    )
  );
}
