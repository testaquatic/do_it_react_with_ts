import Callback from "./pages/Callback";
import HighOrderCallback from "./pages/HighOrderCallback";
import UseOrCreateTest from "./pages/useOrCreateTest";

import "./App.css";
import Memo from "./pages/Memo";

export default function App() {
  return (
    <div>
      <HighOrderCallback />
      <Callback />
      <Memo />
      <UseOrCreateTest />
    </div>
  );
}
