import { useState } from "react";

function StepCounter() {
  const [steps, setSteps] = useState(0);

  return (
    <div
      style={{ maxWidth: "400px", margin: "40px auto", textAlign: "center" }}
    >
      <h2>Step Counter</h2>
      <p style={{ fontSize: "40px", margin: "20px 0" }}>{steps}</p>

      {steps >= 100 ? (
        <p style={{ fontSize: "18px", color: "#4caf50", fontWeight: "bold" }}>
          Goal reached! You hit 100 steps.
        </p>
      ) : (
        <p style={{ fontSize: "18px", color: "#4caf50", fontWeight: "bold" }}>
          Goal not reached yet!
        </p>
      )}

      {steps >= 1000 && (
        <p style={{ fontSize: "18px", color: "#4caf50", fontWeight: "bold" }}>
          Goal reached! You hit 10000 steps.
        </p>
      )}

      <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
        <button
          type="button"
          onClick={() => setSteps((prev) => prev + 1)}
          style={{ padding: "10px 20px" }}
        >
          +1 Step
        </button>

        <button
          type="button"
          onClick={() => setSteps((prev) => prev + 10)}
          style={{ padding: "10px 20px" }}
        >
          +10 Step
        </button>
        <button
          type="button"
          onClick={() => setSteps((prev) => prev + 100)}
          style={{ padding: "10px 20px" }}
        >
          +100 Step
        </button>
        <button
          type="button"
          onClick={() => setSteps(0)}
          style={{ padding: "10px 20px" }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default StepCounter;
