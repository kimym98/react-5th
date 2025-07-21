import { Avatar } from "../components/Avatar";

function AvatarListPage() {
  return (
    <ul className="avatarList">
      <Avatar name="jjang" status="online" />
      <Avatar name="jjanga" status="online" />
      <Avatar name="won" status="online" />
      <Avatar name="mang" status="online" />
      <Avatar name="ee" status="online" />
      <Avatar name="you" status="online" />
      <Avatar name="bong" status="online" />
    </ul>
  );
}

export default AvatarListPage;
