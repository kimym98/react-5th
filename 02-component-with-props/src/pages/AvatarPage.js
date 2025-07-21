import { avatarData } from "../data/data.js";
import Avatar from "../components/avatar/Avatar.js";
import React, { createElement as h } from "../lib/react.js";

export default function AvatarPage() {
  return h(
    "ul",
    {
      className: "avatarList",
    },
    avatarData.items.map(({ id, profil, status }) =>
      h(Avatar, { key: id, profil, status })
    )
  );
}
