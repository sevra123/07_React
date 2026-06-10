import { createContext, useContext, useState } from "react";

import RenderCounter from "../components/RenderCounter";
import AutoFocusInput from "../components/AutoFocusInput";
import "./App.css";

//1.Kreiranje konteksta
const ThemeContext = createContext("light");

function ThemedButton() {
  //3.Dohvat konteksta i primjena
  const theme = useContext(ThemeContext);

  const style = {
    backgroundColor: theme == "dark" ? "#333" : "#FFF",
    color: theme == "dark" ? "#FFF" : "#333",
    padding: "10px 20px",
    border: "1px solid #ccc",
  };

  return <button style={style}>I am {theme}</button>;
}

function App() {
  const [theme, setTheme] = useState("light");

  // 2. Omotavanje stabla sa Context.Provider-om
  return (
    <ThemeContext.Provider value={theme}>
      <h2>Render Counter - useRef Example</h2>
      <RenderCounter />
      <br />
      <h2>Auto Focus Input</h2>
      <AutoFocusInput />
      <br />
      <h2>Theme Context</h2>
      <ThemedButton />
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle theme
      </button>
    </ThemeContext.Provider>
  );
}

export default App;
