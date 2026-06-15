import { Link } from "react-router-dom";
function Home() {
  return (
    <section className="page">
      <div className="hero">
        <p className="eyebrow">React Learning Path</p>
        <h1>Learn React step by step</h1>
        <p>
          Build a strong foundation in React by learning components, state,
          forms, effects, routing and reusable UI patterns.
        </p>
        <div className="hero-actions">
          <Link className="button primary" to="/courses">
            View Courses
          </Link>
          <Link className="button secondary" to="/about">
            About the Academy
          </Link>
        </div>
      </div>
      <section className="features">
        <article className="feature-card">
          <h2>Beginner friendly</h2>
          <p>
            Lessons start from the basics and gradually introduce more advanced
            topics.
          </p>
        </article>
        <article className="feature-card">
          <h2>Practice based</h2>
          <p>
            Every topic includes exercises so students can immediately apply
            what they learn.
          </p>
        </article>
        <article className="feature-card">
          <h2>Real projects</h2>
          <p>
            The course path focuses on small but realistic applications instead
            of isolated snippets only.
          </p>
        </article>
      </section>
    </section>
  );
}
export default Home;
