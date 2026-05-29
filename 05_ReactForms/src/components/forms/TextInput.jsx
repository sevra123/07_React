import { useState } from "react";

function TextInput({ name, label, type }) {
  const [inputValue, setInputValue] = useState("");

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={inputValue}
        onChange={handleChange}
      />
      <p>Current value: {inputValue}</p>
    </div>
  );
}

export default TextInput;
