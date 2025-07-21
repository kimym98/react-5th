import type { UserType } from "../types/user";

interface Props {
  user: UserType;
}

function UserDetail({ user }: Props) {
  const { name, city, email } = user;
  const S = { color: "inherit", textDecoration: "none" };
  return (
    <li>
      <strong>{name}</strong> -{" "}
      <span>
        <a style={S} href={`mailto:${email}`}>
          {email}({city})
        </a>
      </span>
    </li>
  );
}

export default UserDetail;
