import React, { useState } from "react";
import "./SignIn.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({ email: "", password: "" });

    if (!email.includes("@")) {
      setErrors({ ...errors, email: "Email must include @" });
      return;
    }
    if (password.length < 8) {
      setErrors({ ...errors, password: "Password must be at least 8 charts" });
      return;
    }
    console.log("Form Submitted");
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h1> Sign in </h1>
        <label>Pass your interview with success!</label>
        <div className="form-input">
          <input
            className="input"
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {errors.email && <div>{errors.email}</div>}

          <div className="form-input">
            <input
              className="input"
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {errors.password && <div>{errors.password}</div>}
          </div>
          <div className="form-input">
            <label className="form-label">* Forgot password</label>
          </div>
          <div className="form-input">
            <button className="form-button" type="submit">
              Sign in
            </button>
          </div>
          <div className="form-input">
            <label className="form-label">or</label>
          </div>
          <div className="form-input">
            <button className="form-button" type="submit">
              Continue with Google
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
