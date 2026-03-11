import "./App.css";
import Clock from "./pages/Clock";
import { useClock } from "./hooks";

function App() {
  const today = useClock();

  return <Clock today={today}></Clock>;
}

export default App;
