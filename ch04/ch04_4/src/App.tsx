import "./App.css";
import FetchTest from "./pages/FetchTest.tsx";
import WindowResizeTest from "./pages/WindowResizeTest.tsx";
import ClassFLifecycle from "./pages/ClassLifecycle.tsx";

export default function App() {
  return (
    <main>
      <FetchTest />
      <WindowResizeTest />
      <ClassFLifecycle />
    </main>
  );
}
