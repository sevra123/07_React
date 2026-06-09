import { useState } from "react";
import UserProfile from "./components/UserProfile";
import Timer from "./components/Timer";
import "./App.css";

function App() {
  const [userId, setUserId] = useState(1);
  const [showTimer, setShowTimer] = useState(false);

  return (
    <>
      <h2>User Select</h2>
      <select value={userId} onChange={(e) => setUserId(e.target.value)}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
      <UserProfile userId={userId} />
      <br />
      <button type="button" onClick={() => setShowTimer((prev) => !prev)}>
        Show/Hide Timer
      </button>
      {showTimer && (
        <>
          <h2>Timer</h2>
          <Timer />
        </>
      )}
    </>
  );
}

export default App;
