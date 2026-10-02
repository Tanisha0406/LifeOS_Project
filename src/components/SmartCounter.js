import React, { useState } from "react";

function SmartCounter() {
  const [count, setCount] = useState(10);

  const decrease = () => {
    setCount((prev)=> Math.max(0, prev -1));
  }
  return (
    <div>
      <h2>Smart Counter</h2>

      <h3>Number:{count}</h3>

      <p>{count % 2 === 0 ? "Even" : "Odd"}</p>

      <button onClick={() => setCount(count + 1)}>
        +1
      </button>

      <button onClick={() => setCount(Math.max(0, count - 1))}>
        -1
      </button>

      <button onClick={() => setCount(count + 5)}>
        +5
      </button>

      <button onClick={() => setCount(10)}>
        Reset
      </button>
    </div>
  );
}

export default SmartCounter;