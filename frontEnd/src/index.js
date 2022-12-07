import ReactDom from "react-dom";
import { App } from "./components/App";
import { ContextProvider } from "./contexts/ContextProvider";
import "./styles/index.css";

ReactDom.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);
