import "./App.css";

function App() {
  const studentName = "Sara";
  const courseName = "React Basics";
  const completedLessons = 4;
  const totalLessons = 8;
  const isLoggedIn = true;
  const hasCertificate = false;
  const progressPercentage = (completedLessons / totalLessons) * 100;
  const nextTasks = [
    "Review JSX syntax",
    "Practice conditional rendering",
    "Create your first component layout",
  ];
  return (
    <main>
      <h1>My React Learning Dashboard</h1>
      <h2>Welcome, {studentName}!</h2>
      <p>You are currently learning: {courseName}</p>
      <p>
        Progress: {completedLessons} / {totalLessons} completed
      </p>
      <section className="student-card">
        <h2>{studentName}</h2>
        <p>Course: {courseName}</p>
        <p>Completed lessons: {completedLessons}</p>
        <p>Total lessons: {totalLessons}</p>
      </section>
      {isLoggedIn ? (
        <p>You are logged in. Continue learning!</p>
      ) : (
        <p>Please log in to continue your course.</p>
      )}
      {!hasCertificate && (
        <p>Complete all lessons to unlock your certificate.</p>
      )}

      <p>Progress: {progressPercentage.toFixed(0)}%</p>
      <p style={{ fontSize: "18px", fontWeight: "bold" }}>
        Keep going, you are doing great!
      </p>

      <section className="tasks-card">
        <h2>Next Tasks</h2>
        <ul>
          <li>{nextTasks[0]}</li>
          <li>{nextTasks[1]}</li>
          <li>{nextTasks[2]}</li>
        </ul>
      </section>

      <section className="summary-card">
        <p>Today’s focus: JSX attributes and conditional rendering.</p>
      </section>
    </main>
  );
}

export default App;
