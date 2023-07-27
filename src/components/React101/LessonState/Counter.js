import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    let interval = setInterval(() => {
      console.log("interval");
      setCount((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval); //unmount ediyoruz
  }, []);

  // useEffect(() => {
  //   setInterval(() => {
  //     console.log("interval")
  //     setCount((prev) => prev + 1);
  //   }, 1000);
  // }, []);

  //Component ilk kez doma mount edildigi anda bunu yakalamak icin yaparız
  useEffect(() => {
    console.log("Component Mount Edildi.");
  }, []);

  // //2. parametre olarak girilen state degistigi anda fonksiyon tetiklenecektir
  // useEffect(() => {
  //   console.log("Count statei degisti");
  // }, [count]);

  useEffect(() => {
    console.log("Count veya Amount statei degisti");
  }, [count, amount]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + amount)}>Arttır</button>

      {/* Previous State   */}
      {/* <button onClick={() => setCount((prev) => prev + amount)}>Arttır</button> */}

      <hr />

      <div>Artırma: +{amount}</div>
      <button onClick={() => setAmount(1)}>+1</button>
      <button onClick={() => setAmount(3)}>+3</button>
      <button onClick={() => setAmount(10)}>+10</button>
    </div>
  );
}

export default Counter;
