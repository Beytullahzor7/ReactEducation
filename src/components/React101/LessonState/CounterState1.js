import React, { useState } from "react";

function CounterState1() {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(1);

  return (
    <div>
      CounterState1
      <h1>{count}</h1>
      <button onClick={() => setCount(count + amount)}>Arttir</button>

      <hr />

      <div>Arttirma: {amount}</div>
      <button onClick={() => setAmount(1)}>+1</button>
      <button onClick={() => setAmount(3)}>+3</button>
      <button onClick={() => setAmount(5)}>+5</button>



    </div>
  );
}

export default CounterState1;
