import React, { useState } from "react";

function CharacterCounter() {
  const [message, setMessage] = useState("");

  return (
    <div>
      <h2>Character Counter</h2>

      <input
        type="text"
        value={message}
        placeholder="Enter message"
        onChange={(e) => setMessage(e.target.value)}
      />

      <p>Message: {message}</p>

      <p>
        Characters: {message.length}
      </p>

      <button onClick={() => setMessage("")}>
        Clear
      </button>
    </div>
  );
}

export default CharacterCounter;