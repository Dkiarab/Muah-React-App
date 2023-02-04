import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import Homepage from "./pages/Home/HomePage";
import NavBar from "./components/NavBar";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <Homepage /> */}
    {/* <NavBar /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
