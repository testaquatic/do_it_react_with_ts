import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

const pPhysicalDOM = document.createElement("p");
pPhysicalDOM.innerHTML = "Hello physical DOM world!";
document.body.appendChild(pPhysicalDOM);

const virtualDOM = React.createElement("p", null, "Hello world!");
const root = createRoot(document.getElementById("root")!);

root.render(virtualDOM);
