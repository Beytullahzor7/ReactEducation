import React, { useState } from "react";

function UserState2() {
  const [user, setUser] = useState({ name: "Mehmet", surname: "Seven" });

  return (
    <div>
      <h2>User</h2>
      {user.name} {user.surname}
      <br />
      <br />

      <button onClick={() => setUser({ ...user, name: "Ahmet" })}>
        Ismi Degistir
      </button>
      
      <button onClick={() => setUser({ ...user, surname: "Deneme" })}>
        Soyismi Degistir
      </button>
    </div>
  );
}

export default UserState2;
