import { useState } from "react";

function RegistrationForm() {
  const countries = [
    {
      value: "HR",
      label: "Croatia",
    },
    {
      value: "DE",
      label: "Germany",
    },
    {
      value: "HU",
      label: "Hungary",
    },
    {
      value: "IT",
      label: "Italy",
    },
  ];
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    terms: false,
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    terms: "",
  });

  function validateField(name, value) {
    switch (name) {
      case "firstName":
        if (value.trim() === "") {
          return "First name is required.";
        }
        return "";
      case "lastName":
        if (value.trim() === "") {
          return "Last name is required.";
        }
        return "";
      case "email":
        if (value.trim() === "") {
          return "Email is required";
        }
        if (!value.includes("@")) {
          return "Email must include '@'";
        }
        return "";
      case "country":
        if (value.trim() === "") {
          return "Country is required.";
        }
        return "";
      case "terms":
        if (value === false) {
          return "You must accept terms and conditions.";
        }
        return "";
    }
    return "";
  }

  function validateForm() {
    const newErrors = {
      firstName: validateField("firstName", formData.firstName),
      lastName: validateField("lastName", formData.lastName),
      email: validateField("email", formData.email),
      country: validateField("country", formData.country),
      terms: validateField("terms", formData.terms),
    };

    setErrors(newErrors);

    return (
      newErrors.firstName === "" &&
      newErrors.lastName === "" &&
      newErrors.email === "" &&
      newErrors.country === "" &&
      newErrors.terms === ""
    );
  }

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, type === "checkbox" ? checked : value),
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form Data: ", formData);

    const isValid = validateForm();

    if (!isValid) {
      return;
    } else {
      //slanje podataka
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name: </label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className={errors.firstName !== "" ? "input-error" : ""}
        />
        {errors.firstName !== "" && (
          <div className="error-message">{errors.firstName}</div>
        )}
      </div>
      <div>
        <label htmlFor="lastName">Last Name: </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className={errors.lasttName !== "" ? "input-error" : ""}
        />
        {errors.lastName !== "" && (
          <div className="error-message">{errors.lastName}</div>
        )}
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className={errors.email !== "" ? "input-error" : ""}
        />
        {errors.email !== "" && (
          <div className="error-message">{errors.email}</div>
        )}
      </div>
      <div>
        <label htmlFor="country">Country: </label>
        <select
          name="country"
          id="country"
          value={formData.country}
          onChange={handleChange}
          className={errors.country !== "" ? "input-error" : ""}
        >
          <option>-- Select a country --</option>
          {countries.map((country) => (
            <option key={country.value} value={country.value}>
              {country.label}
            </option>
          ))}
        </select>
        {errors.country !== "" && (
          <div className="error-message">{errors.country}</div>
        )}
      </div>
      <div>
        <label htmlFor="terms">Terms of use:</label>
        <input
          type="checkbox"
          name="terms"
          id="terms"
          value={formData.terms}
          onChange={handleChange}
          className={errors.terms !== "" ? "input-error" : ""}
        />
        {errors.terms !== "" && (
          <div className="error-message">{errors.terms}</div>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default RegistrationForm;
