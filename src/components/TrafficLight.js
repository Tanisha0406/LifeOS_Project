import React, { useState } from "react";

function TrafficLight() {
  const [color, setColor] = useState("red");

  const message = {
    red: "STOP",
    yellow: "READY",
    green: "GO",
  };

  return (
    <div>
      <h2>Traffic Light Simulation</h2>

      <button onClick={() => setColor("red")}>
        Red
      </button>

      <button onClick={() => setColor("yellow")}>
        Yellow
      </button>

      <button onClick={() => setColor("green")}>
        Green
      </button>

      <h3>
        Current Signal: {color.toUpperCase()}
      </h3>

      <p>{message[color]}</p>
    </div>
  );
}

export default TrafficLight;