import { useState } from "react";
import DynamicForm from "./DynamicForm";
import "./App.css";

function App() {
  const [applicationData, setApplicationData] = useState(null);
  const fields = [
    {
      name: "fullName",
      label: "Full name",
      type: "text",
      required: true,
      placeholder: "Enter your full name",
      minLength: {
        enabled: true,
        value: 3,
        message: "Full name must have at least 3 characters.",
      },
      maxLength: {
        enabled: true,
        value: 50,
        message: "Full name can have at most 50 characters.",
      },
    },
    {
      name: "email",
      label: "Email",
      type: "text",
      required: true,
      placeholder: "name@example.com",
      email: {
        enabled: true,
        message: "Please enter a valid email address.",
      },
    },
    {
      name: "age",
      label: "Age",
      type: "number",
      required: true,
      placeholder: "Enter your age",
      range: {
        enabled: true,
        min: 16,
        max: 80,
        message: "Age must be between 16 and 80.",
      },
    },
    {
      name: "experienceLevel",
      label: "Experience level",
      type: "select",
      required: true,
      placeholder: "-- choose your level --",
      options: ["Beginner", "Intermediate", "Advanced"],
    },
    {
      name: "courseFormat",
      label: "Preferred course format",
      type: "radio",
      required: true,
      options: ["Online", "Classroom", "Hybrid"],
    },
    {
      name: "motivation",
      label: "Motivation",
      type: "textarea",
      required: true,
      placeholder: "Tell us why you want to join this course...",
      rows: 5,
      minLength: {
        enabled: true,
        value: 30,
        message: "Motivation must have at least 30 characters.",
      },
      maxLength: {
        enabled: true,
        value: 300,
        message: "Motivation can have at most 300 characters.",
      },
    },
    {
      name: "newsletter",
      label: "Newsletter",
      type: "checkbox",
      checkboxLabel: "I want to receive course news and updates",
    },
    {
      name: "acceptTerms",
      label: "Terms and conditions",
      type: "checkbox",
      required: true,
      checkboxLabel: "I accept the terms and conditions",
    },
  ];

  function handleSubmit(data) {
    setApplicationData(data);
  }

  if (applicationData !== null) {
    return (
      <main className="app">
        <section className="summary-card">
          <h1>Application Summary</h1>
          <p>
            <strong>Full name:</strong> {applicationData.fullName}
          </p>

          <button onClick={() => setApplicationData(null)}>
            Submit another application
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="app">
      <h1>React Course Application</h1>

      <DynamicForm fields={fields} />
    </main>
  );
}

export default App;
