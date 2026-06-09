import RenderCounter from "../components/RenderCounter";
import AutoFocusInput from "../components/AutoFocusInput";
import "./App.css";

function App() {
  return (
    <>
      <h2>Render Counter - useRef Example</h2>
      <RenderCounter />
      <br />
      <h2>Auto Focus Input</h2>
      <AutoFocusInput />
    </>
  );
}

export default App;
