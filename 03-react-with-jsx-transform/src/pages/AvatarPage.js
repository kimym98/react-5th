import { avatarData } from "../data/data.js";
import Avatar from "../components/avatar/Avatar.js";
import React, { createElement as h } from "../lib/react.js";

export default function AvatarPage() {
  return h(
    "ul",
    { className: "avatarList" },
    h(Avatar, { name: "jjang", status: "online" }),
    h(Avatar, { name: "원장", status: "dont-disturb" }),
    h(Avatar, { name: "bong", status: "offline" }),
    h(Avatar, { name: "유리", status: "away" })
  );
}
