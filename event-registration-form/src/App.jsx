import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    age: "",
    workshop: "",
    experienceLevel: "",
    motivation: "",
    acceptedRules: false,
  });

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    age: "",
    workshop: "",
    experienceLevel: "",
    motivation: "",
    acceptedRules: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  function validateForm() {
    const newErrors = {
      fullName: "",
      email: "",
      age: "",
      workshop: "",
      experienceLevel: "",
      motivation: "",
      acceptedRules: "",
    };
    if (formData.fullName.trim() === "") {
      newErrors.fullName = "Full name is required.";
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = "Full name must have at least 3 characters.";
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required.";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Email must contain @.";
    }

    if (formData.age.trim() === "") {
      newErrors.age = "Age is required.";
    } else {
      const ageNum = Number(formData.age);
      if (isNaN(ageNum)) {
        newErrors.age = "Age must be a number.";
      } else if (ageNum < 16) {
        newErrors.age = "You must be at least 16 years old.";
      } else if (ageNum > 80) {
        newErrors.age = "Age cannot be greater than 80.";
      }
    }

    if (formData.workshop.trim() === "") {
      newErrors.workshop = "Please choose a workshop.";
    }
    if (formData.experienceLevel.trim() === "") {
      newErrors.experienceLevel = "Please choose your experience level.";
    }

    if (formData.motivation.trim() === "") {
      newErrors.motivation = "Motivation message is required!";
    } else if (formData.motivation.trim().length < 30) {
      newErrors.motivation =
        "Motivation message must have at least 30 characters.";
    }

    if (!formData.acceptedRules) {
      newErrors.acceptedRules = "You must accept the workshop rules.";
    }

    return newErrors;
  }
  function handleChange(event) {
    const { name, value, checked, type } = event.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateForm();

    setErrors(validationErrors);

    const hasError = Object.values(validationErrors).some(
      (error) => error !== "",
    );

    if (hasError) {
      setSubmittedData(null);
      return newErrors;
    }
    setSubmittedData(formData);
  }

  return (
    <main className="app">
      <section className="form-card">
        <h1>Frontend Workshop Registration</h1>
        <p>
          Fill out the form below to register for one of our upcoming frontend
          workshops.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="FullName">Full Name</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
            />
            {errors.fullName && (
              <p className="error-message">{errors.fullName}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              id="age"
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
            />
            {errors.age && <p className="error-message">{errors.age}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="workshop">Please choose a workshop.</label>
            <select
              id="workshop"
              name="workshop"
              value={formData.workshop}
              onChange={handleChange}
            >
              <option value="Choose a workshop">Choose a workshop</option>
              <option value="HTML & CSS Workshop">HTML & CSS Workshop</option>
              <option value="JavaScript Basics Workshop">
                JavaScript Basics Workshop
              </option>
              <option value="React Beginner Workshop">
                React Beginner Workshop
              </option>
              <option value="React Forms Workshop">React Forms Workshop</option>
            </select>
            {errors.workshop && (
              <p className="error-message">{errors.workshop}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="experienceLevel">
              Please choose your experience level.
            </label>
            <select
              id="experienceLevel"
              name="experienceLevel"
              value={formData.experienceLevel}
              onChange={handleChange}
            >
              <option value="Choose your level">Choose your level</option>
              <option value="Beginner">Beginner</option>
              <option value="Some experience">Some experience</option>
              <option value="Intermediate">Intermediate</option>
            </select>
            {errors.experienceLevel && (
              <p className="error-message">{errors.experienceLevel}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="motivation">
              Why do you want to participate in the workshop?
            </label>

            <textarea
              id="motivation"
              name="motivation"
              value={formData.motivation}
              onChange={handleChange}
            ></textarea>
            {errors.motivation && (
              <p className="error-message">{errors.motivation}</p>
            )}
          </div>
          <div className="checked-group">
            <input
              type="checkbox"
              id="acceptedRules"
              name="acceptedRules"
              checked={formData.acceptedRules}
              onChange={handleChange}
            />
            <label htmlFor="acceptedRules">I accept the workshop rules.</label>
            {errors.acceptedRules && (
              <p className="error-message">{errors.acceptedRules}</p>
            )}
          </div>
          <button type="submit">Send message</button>
        </form>
      </section>
    </main>
  );
}

export default App;
