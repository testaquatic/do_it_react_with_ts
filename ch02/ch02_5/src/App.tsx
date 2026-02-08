import DragDrop from "./pages/DragDrop";
import EventBubling from "./pages/EventBubling";
import FileDrop from "./pages/FileDrop";
import FileInput from "./pages/FileInput";
import OnChange from "./pages/OnChange";
import StopPropagation from "./pages/StopPropagation";
import VariousInputs from "./pages/VariousInputs";

function App() {
  return (
    <>
      <div>
        <FileDrop />
        <DragDrop />
        <FileInput />
        <OnChange />
        <VariousInputs />
        <StopPropagation />
        <EventBubling />
        {/* <DispatchEvent />
        <ReactOnClick />
        <OnClick />
        <EventListener /> */}
      </div>
    </>
  );
}

export default App;
