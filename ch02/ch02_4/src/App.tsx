import { P } from "./P.tsx";

function App() {
  const texts = ["hello", "world"].map((text, index) => (
    <P key={index} children={text} />
  ));
  return <div>{texts}</div>;
}

export default App;
