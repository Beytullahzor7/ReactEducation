import React, { useState } from "react";

function Colors() {
  const [colors, setColors] = useState(["Red", "Green", "Yellow"]);

  const handleClick = () => {
    setColors([...colors, "Blue"]);
  };

  return (
    <div>
      <h2>Colors</h2>

      {colors.map((color, i) => (
        <div key={i}>{color}</div>
      ))}

      <button onClick={handleClick}>Ekle</button>
    </div>
  );
}

export default Colors;
