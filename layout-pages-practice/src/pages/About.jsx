function About() {
  const coreValues = [
    "Clear explanations",
    "Step-by-step learning",
    "Practice after every concept",
    "No skipped foundations",
  ];

  return (
    <section className="page">
      <h2>About Our Studio</h2>
      <p className="platform-description">
        React Learning Studio is an interactive educational platform designed to
        make modern web development accesible to everyone.
      </p>
      <section className="teaching-methodology">
        <h3>How we teach</h3>
        <p>
          Our methodology focuses on breaking down complex programming patterns
          into digestible, practical lessons.
        </p>

        <h4> Our Core Principles:</h4>
        <ul className="values-list">
          {coreValues.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </section>
    </section>
  );
}

export default About;
