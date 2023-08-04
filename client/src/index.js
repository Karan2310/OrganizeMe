import React from "react";
import { createRoot } from "react-dom/client"; // Updated import
import "./index.css";
import App from "./App";
import { CookiesProvider } from "react-cookie";

const root = createRoot(document.getElementById("root")); // Use createRoot directly
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </React.StrictMode>
);
