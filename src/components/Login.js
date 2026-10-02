import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const login = () => {
    if (username === "admin" && password === "1234") {
      setMessage("Welcome Admin");
    } else {
      setMessage("Invalid username or password");
    }
  };
  
  const logout = () => {
    setUsername("");
    setPassword("");
    setMessage("");
  };

  return (
    <div>
      <h2>Login Page</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>

      <p>{message}</p>
    </div>
  );
}

export default Login;