import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import "./styles/variables.css";
import App from "./App";
import "flexboxgrid2";
import {
  getSystemDarkTheme,
  GlobalAttributes,
  setDocumentAttribute,
} from "./utils/utils";

const systemTheme = getSystemDarkTheme();
setDocumentAttribute(GlobalAttributes.Theme, systemTheme);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
