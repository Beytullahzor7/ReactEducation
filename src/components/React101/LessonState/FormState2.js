import React, { useState } from "react";

function FormState2() {
  const [form, setForm] = useState({ name: "", surname: "", gender: "0" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <div>
        <div>Isim</div>
        <input
          placeholder="isim"
          value={form.name}
          name="name"
          onChange={handleChange}
        />
        <input
          placeholder="soyisim"
          value={form.surname}
          name="surname"
          onChange={handleChange}
        />
      </div>

      <br />

      <div>
        <div>Cinsiyet</div>
        <select value={form.gender} name="gender" onChange={handleChange}>
          <option value="0">Erkek</option>
          <option value="1">Kadin</option>
        </select>
      </div>

      <hr />

      <div>
        Isim:
        <strong>
          {form.name} {form.surname}
        </strong>
      </div>

      <div>
        Cinsiyet:
        <strong>{form.gender === "0" ? "Erkek" : "Kadin"}</strong>
      </div>
    </div>
  );
}

export default FormState2;
