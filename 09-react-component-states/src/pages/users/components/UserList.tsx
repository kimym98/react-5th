import type { UserType } from "../types/user";
import UserDetail from "./UserDetail";
import "./userList.css";

interface Props {
  users: UserType[];
}

function UserList({ users }: Props) {
  return (
    <ul>
      {users.map((user) => (
        <UserDetail key={user.id} user={user} />
      ))}
    </ul>
  );
}

export default UserList;
