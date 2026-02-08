import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ClassComponent } from "./App";
import ArrowComponent from "./ArrowComponent";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ClassComponent href="https://www.google.com" text="go to Google" />
    <ArrowComponent href="https://twitter.com" text="go to Twitter" />
  </StrictMode>,
);
