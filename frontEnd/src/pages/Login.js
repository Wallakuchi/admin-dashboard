import React from "react";
import { Login as LogIn } from "../components";
import { Link, Navigate } from "react-router-dom";
import "../styles/LoginPg.css";
import { useStateContext } from "../contexts/ContextProvider";

const Login = () => {
  const auth = localStorage.getItem("user");
  const { currentColor, error } = useStateContext();

  return auth ? (
    <Navigate to="/admin/ecommerce" />
  ) : (
    <div className="loginContainer">
      <div className="innerContainer">
        <div className="header">
          <div className="headerOne" style={{ color: currentColor }}>
            Welcome Back
          </div>
          <div className="headerTwo">
            Enter Your Credentials to access your account
          </div>
        </div>
        <div
          className={`pb-6 text-red-500 capitalize ${
            error ? "hidden" : "block"
          }`}
        >
          Enter correct Username or/and Password !
        </div>
        <LogIn />
      </div>
      <div className="bottom">
        <span className="pswrd">Don't have account?</span>
        <Link to={"#"} style={{ color: currentColor }}>
          Signup
        </Link>
      </div>
    </div>
  );
};

export default Login;
