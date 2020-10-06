import React from "react";
import { render } from "react-dom";
import App from "./App/App";

const Main = () => (
  <App />
);
render(<Main />, document.getElementById("app"));
