import { useState } from "react";

function DynamicForm({ fields }) {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checked" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Podaci iz forme spremni za slanje:", formData);
  };

  if (!fields || fields.length === 0) {
    return <p>Učitavanje polja forme...</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => {
        return (
          <div key={field.name}>
            <label htmlFor={field.name}>{field.label}</label>
            {field.type === "textarea" ? (
              <textarea
                id={field.name}
                name={field.name}
                value={formData[field.name] || ""}
                onChange={handleChange}
                rows="4"
              />
            ) : field.type === "checkbox" ? (
              <div>
                <input
                  type="checkbox"
                  id={field.name}
                  name={field.name}
                  checked={formData[field.name] || false}
                  onChange={handleChange}
                />
              </div>
            ) : (
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                value={formData[field.name] || ""}
                onChange={handleChange}
              />
            )}
          </div>
        );
      })}

      <button type="submit">Pošalji prijavu</button>
    </form>
  );
}

export default DynamicForm;
