import React from "react";
import { useNavigate } from "react-router-dom";
import { USER_STORAGE_KEY } from "../constants";
import { useStateContext } from "../contexts/ContextProvider";
import { loginService } from "../services/login-service";
import { setToStorage } from "./../utils/index";

const Login = () => {
  const {
    username,
    password,
    setUsername,
    setPassword,
    initialState,
    setIsClicked,
    currentColor,
    setError,
  } = useStateContext();
  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const data = await loginService(username, password);

    if (data.status === 1) {
      setToStorage(USER_STORAGE_KEY, JSON.stringify(data));
      navigate("/admin");
      setIsClicked(initialState);
      setUsername("");
      setPassword("");
    } else {
      setError(false);
    }
  };
  return (
    <form className="form" method="post">
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ outlineColor: currentColor }}
      />
      <input
        type="password"
        placeholder="Enter Your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ outlineColor: currentColor }}
      />
      <button
        className="btn"
        type="submit"
        onClick={handleFormSubmit}
        style={{ backgroundColor: currentColor }}
      >
        Sign In
      </button>
    </form>
  );
};

export default Login;
