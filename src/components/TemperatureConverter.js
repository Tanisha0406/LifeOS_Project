import React, { useState } from "react";

function TemperatureConverter() {
  const [celsius, setCelsius] = useState("");

  const fahrenheit =
    celsius === ""
      ? ""
      : (Number(celsius) * 9) / 5 + 32;

  return (
    <div>
      <h2>Temperature Converter</h2>

      <input
        type="number"
        placeholder="Enter Celsius"
        value={celsius}
        onChange={(e) => setCelsius(e.target.value)}
      />

      <p>Celsius: {celsius}</p>

      <p>Fahrenheit: {fahrenheit}</p>

      <button onClick={() => setCelsius("")}>
        Clear
      </button>
    </div>
  );
}

export default TemperatureConverter;