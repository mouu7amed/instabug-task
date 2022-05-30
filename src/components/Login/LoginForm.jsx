import React, { useState } from "react";
import logo from "../../assets/Instabug-icon.svg";
import {
  faGithub,
  faGoogle,
  faMicrosoft,
  faReddit,
  faSlack,
  faStumbleupon,
  faWordpress,
  faYahoo,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth } from "../../utilities/AuthProvider";
import { motion } from "framer-motion";

const loginFormVariants = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: {
      duration: 1,
      type: "spring",
    },
  },
};

export const LoginForm = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const { login, loginError } = useAuth();

  const loginHandler = (e) => {
    e.preventDefault();

    //Check empty fields
    if (!user.email || !user.password) {
      return;
    }

    //Email Validation
    if (
      !user.email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      setError({ email: "Enter a valid email address" });
      return;
    }

    //The password must be more than 6 characters
    if (user.password.length < 6) {
      setError({ password: "Password must be 6 characters or more" });
      return;
    }

    //The password must contain at least 1 uppercase letters and one number
    if (!user.password.match(/^(?=.*?[A-Z])(?=.*?[0-9]).{6,}$/)) {
      setError({
        password:
          "Password must contain at least 1 uppercase letter and one number",
      });
      return;
    }

    //The password shouldn’t contain the email address name (username)
    const username = user.email
      .substr(0, user.email.indexOf("@"))
      .toLowerCase();
    if (!user.password.match(`^((?!(${username})).)*$`)) {
      setError({
        password: "Password shouldn’t contain the email address name",
      });
      return;
    }

    // login
    try {
      login(user.email, user.password);
    } catch {
      console.log("Error logging in");
    }

    setUser({ email: "", password: "" });
  };

  return (
    <motion.div
      className="login-form"
      variants={loginFormVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="header">
        <img src={logo} alt="logo" />
        <p>Log in to instabug</p>
      </div>

      <form onSubmit={loginHandler}>
        <div className="social-login">
          <button className="google">
            <FontAwesomeIcon icon={faGoogle} className="icon" />
            Google
          </button>
          <button className="github">
            <FontAwesomeIcon icon={faGithub} className="icon" />
            Github
          </button>
          <button className="microsoft">
            <FontAwesomeIcon icon={faMicrosoft} className="icon" />
            Microsoft
          </button>
        </div>
        <div className="divider">
          <span>OR</span>
        </div>

        {!!loginError && (
          <div className="error-alert">
            <p>{loginError}</p>
          </div>
        )}

        <label>Work Email</label>
        <input
          className={!error.email ? "input-field" : "input-field-error"}
          placeholder="you@company.com"
          type="text"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <p className="error">{!!error.email && error.email}</p>
        <div className="password-label">
          <label>Password</label>
          <span>Forgot password?</span>
        </div>
        <input
          className={!error.password ? "input-field" : "input-field-error"}
          placeholder="8+ Characters"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <p className="error">{!!error.password && error.password}</p>
        <button
          type="submit"
          className="loginBtn"
          disabled={!user.email || !user.password}
        >
          Login
        </button>

        <div className="signup">
          <p>
            Don't have an account? <span>Sign up</span>
          </p>
          <p>Login via SSO</p>
        </div>
        <div className="trusted">Trusted by the top companies.</div>
        <div className="logos">
          <FontAwesomeIcon icon={faStumbleupon} className="logo" />
          <FontAwesomeIcon icon={faWordpress} className="logo" />
          <FontAwesomeIcon icon={faSlack} className="logo" />
          <FontAwesomeIcon icon={faReddit} className="logo" />
          <FontAwesomeIcon icon={faYahoo} className="logo" />
        </div>
      </form>
    </motion.div>
  );
};
