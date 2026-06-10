import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggleButton from "./components/ThemeToggleButton";
import ContentArea from "./components/ContentArea";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <main className="app">
        <h1>Theme Demo</h1>
        <ThemeToggleButton />
        <ContentArea />
      </main>
    </ThemeProvider>
  );
}

export default App;
