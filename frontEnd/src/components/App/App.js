import React from "react";
import { BrowserRouter } from "react-router-dom";

import "../../styles/App.css";
import { Routes } from "./routes/Routes";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};
