function Resources() {
  const resourcesData = [
    {
      id: 1,
      title: "Documentation",
      description: "The official React documentation is your go-to guide...",
    },
    {
      id: 2,
      title: "Practice tasks",
      description: "A curated collection of interactive coding challenges...",
    },
    {
      id: 3,
      title: "Cheat sheets",
      description: "Quick reference guides covering JSX syntax...",
    },
  ];

  return (
    <section className="page">
      <h2>Learning Resources</h2>
      <p className="page-subtitle">
        Boost your learning process with these carefully selected materials,
        tools and reference guides.
      </p>
      <div className="resources-grid">
        {resourcesData.map((resource) => (
          <div key={resource.id} className="resource-card">
            <h3>{resource.title}</h3>
            <p>{resource.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Resources;
