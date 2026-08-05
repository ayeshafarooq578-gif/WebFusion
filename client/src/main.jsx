import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./index.css";
import "./styles/globals.css";

import "@fontsource/inter";
import "@fontsource/sora";

import "aos/dist/aos.css";
import AOS from "aos";

AOS.init({
  duration: 900,
  once: true,
  easing: "ease-out-cubic",
});


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);