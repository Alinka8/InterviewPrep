import React, { useState } from "react";

const LogIn = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ username: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({ username: "", password: "" });

    if (!userName.trim()) {
      setErrors((errors) => ({
        ...errors,
        userName: "Username cannot be empty",
      }));
      return;
    }
    if (!password.trim()) {
      return;
    }

    if (password.length < 8) {
      setErrors((errors) => ({
        ...errors,
        password: "Password must be at least 8 charts",
      }));
      return;
    }
    console.log("Form Submitted");
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <div>
          <h1>Login</h1>
          <div>
            <input
              className="input"
              type="text"
              name="username"
              placeholder="Username"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            {errors.username && (
              <div style={{ color: "red" }}>{errors.username}</div>
            )}
          </div>
          <div>
            <input
              className="input"
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {errors.password && (
              <div style={{ color: "red" }}>{errors.password}</div>
            )}
          </div>
          <div>
            <label>Forgot password?</label>
          </div>
          <div>
            <button>LogIn</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
