import {
  faKey,
  faUser,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (!username || !password) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [username, password]);

  const handleLogin = () => {
    console.log("Submit");
  };

  return (
    <section className="login-page container">
      <div className="form-box">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div className="form-input">
            <FontAwesomeIcon icon={faUser} className="icons" />
            <label htmlFor="username">USERNAME</label>
            <input
              type="text"
              id="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-input">
            <FontAwesomeIcon icon={faKey} className="icons" />
            <label htmlFor="password">PASSWORD</label>
            <input
              type={!showPassword ? "password" : "text"}
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <FontAwesomeIcon
              icon={!showPassword ? faEye : faEyeSlash}
              className="icons password-icons"
              onClick={handleShowPassword}
            />
          </div>
          <button disabled={!isValid}>LOGIN</button>
        </form>
        <p>
          No account? <a href="/register">Register</a>
        </p>
      </div>
    </section>
  );
};

export default Login;
