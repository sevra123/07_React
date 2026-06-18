function Home() {
  return (
    <section className="page">
      <h1>Learn React with practical lessons</h1>
      <p>
        This academy helps students learn React step by step through clear
        explanations, examples and hands-on exercises.
      </p>

      <div className="info-grid">
        <article className="info-card">
          <h2>Structured learning</h2>
          <p>
            Lessons are organized in a clear order so each new topic builds on
            what students already know.
          </p>
        </article>

        <article className="info-card">
          <h2>Hands-on practice</h2>
          <p>
            Every important concept is followed by a practical exercise that
            helps students apply the theory.
          </p>
        </article>
      </div>
    </section>
  );
}

export default Home;
