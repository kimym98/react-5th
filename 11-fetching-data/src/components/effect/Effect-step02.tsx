import { useEffect, useState } from "react";

function Effect() {
  const [users, setUsers] = useState<User[] | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      if (response.ok) {
        setUsers(data);
        setLoading(false);
      } else {
        console.error("error!!");
        setLoading(false);
      }
    };

    fetchData();
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setUsers(data);
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     console.error("데이터 가져오기 실패 !", err);
    //     setLoading(false);
    //   });
  }, []);
  if (loading) return <p>loading...</p>;
  return (
    <ul>
      {users &&
        users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
    </ul>
  );
}
export default Effect;
