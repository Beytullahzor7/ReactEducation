import React, { useEffect, useState } from "react";

function UsersFetch1() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  //Bunu yaparak componentin mount anini yakaladik
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h2>Users</h2>

      {loading && <div>Yukleniyor...</div>}

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UsersFetch1;
