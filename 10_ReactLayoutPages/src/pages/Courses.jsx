function Courses() {
  return (
    <section className="page">
      <p className="eyebrow">Courses</p>

      <h1>Choose your React learning path</h1>

      <p>
        Explore focused React modules that cover the most important concepts
        used in real-world applications.
      </p>

      <div className="course-list">
        <article className="course-card">
          <h2>React Basics</h2>
          <p>
            Learn JSX, components, props, state and the core React mental model.
          </p>
        </article>

        <article className="course-card">
          <h2>Forms and Validation</h2>
          <p>
            Practice controlled inputs, form submission, validation and reusable
            form patterns.
          </p>
        </article>

        <article className="course-card">
          <h2>Routing and Layouts</h2>
          <p>
            Build multi-page single-page applications with shared layouts and
            route navigation.
          </p>
        </article>
      </div>
    </section>
  );
}
export default Courses;
