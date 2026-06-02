import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    experience: "beginner",
    motivation: "",
    acceptTerms: false,
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  function resetForm() {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      experience: "beginner",
      motivation: "",
      acceptTerms: false,
    });
    setSubmitted(false);
  }

  if (submitted) {
    return (
      <main className="app">
        <section className="summary-card">
          <h1>Registration Summary</h1>
          <p>
            <strong>Name:</strong> {formData.firstName} {formData.lastName}
          </p>
          <p>
            <strong>Email:</strong> {formData.email}
          </p>
          <p>
            <strong>Experience:</strong> {formData.experience}
          </p>
          <p>
            <strong>Preferred schedule:</strong> {formData.schedule}
          </p>
          <p>
            <strong>Motivation:</strong> {formData.motivation}
          </p>
          <p>
            <strong>Terms accepted:</strong>{" "}
            {formData.acceptTerms ? "Yes" : "No"}
          </p>
          <div className="button-row">
            <button onClick={() => setSubmitted(false)}>Edit Form</button>

            <button onClick={resetForm}>Start Over</button>
          </div>
        </section>
      </main>
    );
  }
  return (
    <main className="app">
      <h1>React Workshop Registration</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="firstName">First name:</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last name:</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="experience">Experience level:</label>
          <select
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="schedule">Preferred schedule:</label>
          <select
            id="schedule"
            name="schedule"
            value={formData.schedule}
            onChange={handleChange}
          >
            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="evening">Evening</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="motivation">Why do you want to join?</label>
          <textarea
            id="motivation"
            name="motivation"
            value={formData.motivation}
            onChange={handleChange}
            rows={4}
          />
        </div>
        <div className="checkbox-group">
          <label>
            <input
              name="acceptTerms"
              type="checkbox"
              checked={formData.acceptTerms}
              onChange={handleChange}
            />{" "}
            I accept the terms and conditions
          </label>
        </div>

        <button type="submit" disabled={!formData.acceptTerms}>
          Register
        </button>
      </form>
      <section className="preview-card">
        <h2>Live Preview</h2>
        <p>
          {formData.firstName} {formData.lastName}
        </p>
        <p>{formData.email}</p>
        <p>{formData.experience}</p>
      </section>
    </main>
  );
}

export default App;
