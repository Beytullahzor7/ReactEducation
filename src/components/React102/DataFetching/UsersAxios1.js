import React, { useEffect, useState } from "react";
import axios from "axios";

function UsersAxios1() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  //Bunu yaparak componentin mount anini yakaladik
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
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

export default UsersAxios1;
