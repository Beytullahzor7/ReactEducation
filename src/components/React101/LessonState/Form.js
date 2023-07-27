import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [gender, setGender] = useState("0");

  return (
    <div>
      <div>
        <div>Isim</div>
        <input
          placeholder="isim"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          placeholder="soyisim"
          value={surname}
          onChange={(event) => setSurname(event.target.value)}
        />
      </div>

      <br />

      <div>
        <div>Cinsiyet</div>
        <select
          value={gender}
          onChange={(event) => setGender(event.target.value)}
        >
          <option value="0">Erkek</option>
          <option value="1">Kadin</option>
        </select>
      </div>

      <hr />

      <div>
        Isim:
        <strong>
          {name} {surname}
        </strong>
      </div>

      <div>
        Cinsiyet:
        <strong>{gender === "0" ? "Erkek" : "Kadin"}</strong>
      </div>
    </div>
  );
}

export default Form;
