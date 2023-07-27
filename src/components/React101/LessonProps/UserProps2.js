import React from "react";

function UserProps2({ data, friends }) {
  console.log(friends);
  return (
    <div>
      UserProps2
      <div>Isim : {data.name}</div>
      <div>Yas : {data.age}</div>
      <div>Sehir : {data.city}</div>

      <h3>Arkadaslari</h3>
      
      {friends.map((friend, i) => (
        <div key={i}>{friend}</div>
      ))}
      <hr />
    </div>
  );
}

export default UserProps2;
