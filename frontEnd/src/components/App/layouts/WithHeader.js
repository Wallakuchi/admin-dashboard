import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

import "../../../styles/App.css";
import {
  Navbar,
  Sidebar,
  ThemeSettings,
  Footer,
  SettingBtn,
} from "../../../components";

import { useStateContext } from "../../../contexts/ContextProvider";
import { USER_STORAGE_KEY } from "../../../constants";
import { getFromStorage } from "../../../utils";

const WithHeader = () => {
  const { activeMenu, themeSettings, currentMode } = useStateContext();
  const auth = getFromStorage(USER_STORAGE_KEY);
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) {
      navigate("/login");
    }
  });

  return auth ? (
    <>
      <div className={currentMode === "Dark" ? "dark" : ""}>
        {/* Main Container */}
        <div className="flex relative dark:bg-main-dark-bg ">
          <SettingBtn />

          {/* Sidebar left Pannel Coding */}
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          {/**------------------------------------------------------------------- */}

          {/* Right Section/Portion of Page  */}
          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-1"
            }`}
          >
            {/* Top Navbar coding  */}
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>
            {/**------------------------------------------------------------------- */}
            <div>
              {themeSettings && <ThemeSettings />}
              <Outlet />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  ) : (
    <Navigate to="/login" />
  );
};

export default WithHeader;
