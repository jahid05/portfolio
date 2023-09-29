import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="h-screen w-full font-custom-100">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
