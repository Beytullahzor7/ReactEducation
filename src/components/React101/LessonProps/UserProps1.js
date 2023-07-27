import React from 'react'

function UserProps1(props) {
  console.log(props);
  return (
    <div>User
      <div>Isim : {props.name}</div>
      <div>Yas : {props.age}</div>
      <div>Sehir : {props.city}</div>
    </div>
  )
}

export default UserProps1