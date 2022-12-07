import React from "react";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useStateContext } from "../contexts/ContextProvider";

function SettingBtn() {
  const { setThemeSettings, currentColor } = useStateContext();
  return (
    <div>
      {/** ---------------setting button coding------------------------ */}
      <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
        <TooltipComponent content="settings" position="top">
          <button
            type="button"
            className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
            style={{ background: currentColor, borderRadius: "50%" }}
            onClick={() => setThemeSettings(true)}
          >
            <FiSettings />
          </button>
        </TooltipComponent>
      </div>
      {/**------------------------------------------------------------------- */}
    </div>
  );
}

export default SettingBtn;
