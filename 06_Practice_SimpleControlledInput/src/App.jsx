import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");

  return (
    <main className="app">
      <h1>Simple Name Form</h1>

      <div className="form-group">
        <label htmlFor="name">Your name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <p className="current-value">Current value: {name} </p>
        <p className="message">
          {name === "" ? "Please enter your name." : `Hello, ${name}!`}{" "}
        </p>
        <button onClick={() => setName("")}>Clear</button>
      </div>
    </main>
  );
}

export default App;
