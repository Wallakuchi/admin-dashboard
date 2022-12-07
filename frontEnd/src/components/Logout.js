import React from "react";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

const Logout = ({
  icon,
  bgColor,
  color,
  bgHoverColor,
  size,
  text,
  borderRadius,
  width,
}) => {
  const navigate = useNavigate();
  const {setError} = useStateContext()
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
    setError(true)

  };

  return (
    <button
      type="button"
      onClick={() => handleLogout()}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {icon} {text}
    </button>
  );
};

export default Logout;
