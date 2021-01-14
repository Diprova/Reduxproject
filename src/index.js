import React from "react";
import { render } from "react-dom";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import App from "./App";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ContextApi } from "./Route/ContextApi";

const options = {
  position: "bottom center",
  timeout: 5000,
  offset: "30px",
  transition: "scale",
};

render(
  <AlertProvider template={AlertTemplate} {...options} position="bottom center">
    <ContextApi>
      <Router>
        <App />
      </Router>
    </ContextApi>
  </AlertProvider>,
  document.getElementById("root")
);
