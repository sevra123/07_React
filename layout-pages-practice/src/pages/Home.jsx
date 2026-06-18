import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="page">
      <h1>Welcome to React Learning Studio</h1>
      <p>
        Learn React step by step through lessons, examples and practice tasks.
      </p>

      <div className="cards-container">
        <article className="card">
          <h3>Begginer friendly</h3>
          <p>
            Perfect for coding newcomers. Learn React step-by-step with simple,
            easy-to-follow explanations and no prior advanced knowledge
            required.
          </p>
        </article>

        <article className="card">
          <h3>Practice focused</h3>
          <p>
            Learn by doing. Build real projects, complete interactive
            challenges, and reinforce your knowledge through hands-on tasks.
          </p>
        </article>
      </div>
      <div className="navigation-link">
        <Link to="/lessons" className="btn-link">
          View lessons
        </Link>
      </div>
    </section>
  );
}

export default Home;
