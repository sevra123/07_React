function About() {
  return (
    <section className="page">
      <div className="page-header">
        <p className="eyebrow">About us</p>
        <h1>We teach React through practical examples</h1>
        <p>
          Our learning approach focuses on clear explanations, small projects
          and exercises that build confidence step by step.
        </p>
      </div>
      <section className="about-content">
        <article className="feature-card">
          <h2>Our approach</h2>
          <p>
            We avoid jumping too quickly into advanced topics. Each new concept
            is introduced only after students have enough foundation to
            understand it.
          </p>
        </article>
        <article className="feature-card">
          <h2>How students learn</h2>
          <p>
            Students first read and discuss the concept, then build a small
            example, and finally complete a practice task independently.
          </p>
        </article>
      </section>
    </section>
  );
}
export default About;
