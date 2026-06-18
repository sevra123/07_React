function About() {
  return (
    <section className="page">
      <p className="eyebrow">About</p>

      <h1>Our teaching approach</h1>

      <p>
        We believe that React should be taught gradually. Students should first
        understand the mental model before moving into advanced patterns.
      </p>

      <div className="info-card">
        <h2>Why layout pages matter</h2>

        <p>
          Layout pages help us avoid repeating the same structure across every
          route. They keep shared UI in one place and make the application
          easier to maintain.
        </p>
      </div>
    </section>
  );
}

export default About;
