import { useState } from "react";

import "./App.css";

function App() {
  const [moodScore, setMoodScore] = useState(0);

  return (
    <main className="app">
      <h1>Mood Tracker</h1>
      <p className="score">Current mood score: {moodScore}</p>

      <button onClick={() => setMoodScore((prev) => prev + 1)}>
        Better mood +1
      </button>

      <button onClick={() => setMoodScore((prev) => prev + 5)}>
        Great moment +5
      </button>

      <button onClick={() => setMoodScore((prev) => prev - 1)}>
        Worse mood -1
      </button>

      <button onClick={() => setMoodScore(0)}>Reset</button>

      <button onClick={() => setMoodScore((prev) => prev - 5)}>
        Bad day -5
      </button>

      <button
        onClick={() => {
          setMoodScore((prev) => prev + 1);
          setMoodScore((prev) => prev + 1);
          setMoodScore((prev) => prev + 1);
        }}
      >
        Triple boost +3
      </button>

      <p className="message">
        {moodScore > 0
          ? "You are having a positive day!"
          : moodScore === 0
            ? "Your mood is neutral right now."
            : "Take a deep breath. Tomorrow can be better."}
      </p>

      {moodScore >= 10 && (
        <p className="bonus-message">
          Amazing! This looks like an excellent day.
        </p>
      )}

      {moodScore <= -5 && (
        <p className="support-message">
          It may be a good moment to take a short break.
        </p>
      )}

      <p>
        Status:{" "}
        {moodScore > 0 ? "Positive" : moodScore === 0 ? "Neutral" : "Negative"}
      </p>
    </main>
  );
}

export default App;
