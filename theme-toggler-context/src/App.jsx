import { createContext, useContext, useState } from "react";
import { ThemeProvider, ThemeContext } from "./ThemeContext";
import "./App.css";

function ThemedLayout({ children }) {
  const { theme } = useContext(ThemeContext);
  const layoutClass = theme === "dark" ? "app app-dark" : "app app-light";
  return <main className={layoutClass}>{children}</main>;
}

function ThemeToggleButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme} className="theme-button">
      Switch to {theme === "light" ? "dark" : "light"} mode
    </button>
  );
}
function ContentArea() {
  const { theme } = useContext(ThemeContext);
  const contentClass =
    theme === "dark" ? "content-area dark" : "content-area light";
  return (
    <section className={contentClass}>
      <h2>Content Area</h2>
      <p>This area responds to the current theme. The theme is: {theme}.</p>
    </section>
  );
}
function ThemeStatus() {
  const { theme } = useContext(ThemeContext);
  return <p className="theme-status">Current theme: {theme}</p>;
}
function App() {
  return (
    <ThemeProvider>
      <ThemedLayout>
        <h1>Theme Demo</h1>
        <ThemeToggleButton />
        <ContentArea />
        <ThemeStatus />
      </ThemedLayout>
    </ThemeProvider>
  );
}

export default App;
