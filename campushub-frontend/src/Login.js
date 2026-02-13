import { useState } from "react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!username.trim() || !password.trim()) return;

    if (username === "admin") {
      onLogin("admin");
    } else {
      onLogin("student");
    }
  }

  return (
    <div className="login-wrapper">
      <div className="login-card-modern">
        <h1>CampusHub</h1>
        <p className="login-sub">Welcome back</p>

        <form onSubmit={handleSubmit}>
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

          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default Login;




