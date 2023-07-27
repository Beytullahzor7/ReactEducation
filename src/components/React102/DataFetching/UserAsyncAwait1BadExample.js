import React, { useEffect, useState } from "react";
import axios from "axios";

function UserAsyncAwait1() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  //Bunu yaparak componentin mount anini yakaladik
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        axios(
          `https://jsonplaceholder.typicode.com/posts?userId=${res.data[0].id}`
        ).then((res) => {
          setPosts(res.data);
        });
      })
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

      <h2>Posts</h2>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserAsyncAwait1;
