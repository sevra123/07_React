import { useState } from "react";

function MoodScore() {
  const [moodScore, setMoodScore] = useState(0);

  return <p className="score">Current mood score: {moodScore}</p>;
}

export default MoodScore;
