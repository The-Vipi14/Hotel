import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import { ToastContainer } from "react-toastify";

AOS.init({
  duration: 800,
  once: true,
  easing: "ease-out-cubic",
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastContainer
      position="top-right"
      autoClose={1200}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      pauseOnHover
      theme="light"
    />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
