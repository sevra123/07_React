function Lessons() {
  const lessonsData = [
    {
      id: 1,
      title: "React Components",
      description:
        "Learn how to build reusable and independent UI pieces that serve as the core building blocks of any React application.",
    },
    {
      id: 2,
      title: "Props and Children",
      description:
        "Understand how to pass data dynamically from parent to child components and use the children prop for flexible layouts.",
    },
    {
      id: 3,
      title: "State and Events",
      description:
        "Master component memory with the useState hook and learn how to handle user interactions like clicks and inputs",
    },
    {
      id: 4,
      title: "Routing and Events",
      description:
        "Explore how to navigate between different pages smoothly reloading and create structured website structures.",
    },
  ];

  return (
    <section className="page">
      <h2>Available Lessons</h2>
      <p className="page-subtitle">
        Explore our structured curriculum designed to take you from a React
        beginner to a confident developer.
      </p>
      <div className="lessons-list">
        {lessonsData.map((lesson) => (
          <div key={lesson.id} className="lesson-card">
            <h3>{lesson.title}</h3>
            <p>{lesson.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Lessons;
