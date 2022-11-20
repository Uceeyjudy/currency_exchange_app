import React, { useState } from "react";
import { LoginSection } from "./Components/loginPageStyle";
import viewIcon from "../../assets/icons/password_view.svg";

const LoginPage = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [passwordState, setPasswordState] = useState("text");

  const { email, password } = formState;

  const handleOnChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleViewPassword = () => {
    if (passwordState === "text") {
      setPasswordState("password");
    } else {
      setPasswordState("text");
    }
  };

  return (
    <LoginSection>
      <div className="login-modal">
        <h2>
          Street<span>Rates</span>{" "}
        </h2>
        <form action="">
          <h1>Login</h1>
          <div className="login-form-field">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={handleOnChange}
            />
          </div>
          <div className="login-form-field">
            <label htmlFor="password">Password</label>
            <div className="password-field">
              <input
                type={passwordState}
                name="password"
                id="password"
                value={password}
                onChange={handleOnChange}
              />
              <div className="view-icon" onClick={handleViewPassword}>
                <img src={viewIcon} alt="" />
              </div>
            </div>
          </div>
          <p>Forgot password?</p>
          <div className="login-pass-check">
            <input type="checkbox" name="verify" id="verify" />
            <label htmlFor="verify">Always keep me logged in</label>
          </div>
          <button>Login</button>
        </form>
        <div className="signup">
          <p>Don’t have an account?</p>
          <p className="signup-btn">Sign up</p>
        </div>
      </div>
    </LoginSection>
  );
};

export default LoginPage;
