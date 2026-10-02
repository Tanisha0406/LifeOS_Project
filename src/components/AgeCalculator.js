import React, { useState } from "react";

function AgeCalculator() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");

  return (
    <div>
      <h2>Age Calculator</h2>

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      {age > 0 && (
        <div>
          <p>Hello {name}</p>
          <p>You are {age} years old.</p>
          <p>In 5 years, you will be {Number(age) + 5}.</p>
        </div>
      )}
    </div>
  );
}

export default AgeCalculator;