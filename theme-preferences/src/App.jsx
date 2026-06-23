import useLocalStorage from "./hooks/useLocalStorage";
import "./App.css";

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const [name, setName] = useLocalStorage("name", "");

  const [fontSize, setFontSize] = useLocalStorage("fontSize", "medium");
  const getFontSizeStyle = () => {
    if (fontSize === "small") return "14px";
    if (fontSize === "large") return "22px";
    return "18px";
  };

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  }

  function handleReset() {
    setTheme("light");
    setName("");
    setFontSize("medium");
  }
  return (
    <main className={`app ${theme === "dark" ? "dark" : "light"}`}>
      <section className="panel" style={{ fontSize: getFontSizeStyle() }}>
        <p className="eyebrow">Custom Hooks Practice</p>
        <h1>Theme Preferences</h1>
        <p>
          Choose your preferred theme. The application will remember your choice
          even after you refresh the page.
        </p>

        <div className="add-name">
          <label htmlFor="nameInput">Unesite ime: </label>
          <input
            id="nameInput"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Upišite ime"
          />
        </div>
        <div className="font">
          <label htmlFor="fontSelect">Veličina fonta: </label>
          <select
            id="fontSelect"
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value)}
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
        <div className="theme-status">
          Current theme: <strong>{theme}</strong>
        </div>

        <button onClick={toggleTheme}>
          Switch to {theme === "light" ? "dark" : "light"} theme
        </button>
        <button onClick={handleReset}>Reset preferences</button>
        <article className="preview-card">
          <h2>Preview Card</h2>
          <p>
            This card changes together with the selected theme. The value is
            stored in localStorage through a reusable custom hook.
          </p>
        </article>
      </section>
    </main>
  );
}

export default App;
