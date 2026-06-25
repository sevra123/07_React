import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    message: "",
    acceptedTerms: false,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    course: "",
    message: "",
    acceptedTerms: "",
  });

  function validateForm() {
    const newErrors = {
      name: "",
      email: "",
      course: "",
      message: "",
      acceptedTerms: "",
    };

    if (formData.name.trim() === "") {
      newErrors.name = "Name is required!";
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required!";
    }

    if (formData.course.trim() === "") {
      newErrors.course = "Course is required!";
    }

    if (formData.message.trim() === "") {
      newErrors.message = "Message is required!";
    }

    if (!formData.acceptedTerms) {
      newErrors.acceptedTerms = "You must accept the terms!";
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
    // 1.validateForm ce nam vratiti objekt sa porukama o gresci
    const validationErrors = validateForm();
    //2.postavljamo te greske u errors state objekt
    setErrors(validationErrors);

    //3.provjeravamo postoji li iti jedna greska
    const hasError = Object.values(validationErrors).some(
      (error) => error !== "",
    );

    //4.ako postoji, ne idemo dalje
    if (hasError) {
      return;
    }

    //5.ako ne postoji greska, saljemo obrazac
    console.log(formData);
  }

  return (
    <main className="app">
      <section className="form-card">
        <h1>Course Inqury Form</h1>
        <p>Send us a message and tell us which course you are interested in.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error-message">{errors.name}</p>}
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
            <label htmlFor="course">Course</label>
            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
            >
              <option value="">Choose a course</option>
              <option value="React Basics">React Basics</option>
              <option value="React Forms">React Forms</option>
              <option value="React Router">React Router</option>
              <option value="React Hooks">React Hooks</option>
            </select>
            {errors.course && <p className="error-message">{errors.course}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
            ></textarea>
            {errors.message && (
              <p className="error-message">{errors.message}</p>
            )}
          </div>
          <div className="checked-group">
            <input
              type="checkbox"
              id="acceptedTerms"
              name="acceptedTerms"
              value={formData.acceptedTerms}
              onChange={handleChange}
            />
            <label htmlFor="acceptedTerms">
              I accept the terms and conditions
            </label>
            {errors.acceptedTerms && (
              <p className="error-message">{errors.acceptedTerms}</p>
            )}
          </div>
          <button type="submit">Send message</button>
        </form>
      </section>
    </main>
  );
}

export default App;
