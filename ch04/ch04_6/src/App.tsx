import { StrictMode } from "react";
import ResponsiveContextTest from "./pages/ResponsiveContextTest";
import { ResponsiveProvider } from "./contexts";
import "./App.css";

export default function App() {
  return (
    <StrictMode>
      <ResponsiveProvider>
        <main>
          <ResponsiveContextTest />
        </main>
      </ResponsiveProvider>
    </StrictMode>
  );
}
