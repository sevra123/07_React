function Button({ label = "Click me", variant = "primary" }) {
  return (
    <button type="button" className={`btn-${variant}`}>
      {label}
    </button>
  );
}

export default Button;
