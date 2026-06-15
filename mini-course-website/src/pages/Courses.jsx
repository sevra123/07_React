import { Link } from "react-router-dom";
import { courses } from "../data/courses";

const courses = [
  {
    id: 1,
    title: "React Basics",
    level: "Beginner",
    duration: "4 weeks",
    description:
      "Learn components, JSX, props, state and the basic React mental model.",
  },
  {
    id: 2,
    title: "React Forms",
    level: "Intermediate",
    duration: "3 weeks",
    description:
      "Practice controlled inputs, validation, submit handling and reusable form patterns.",
  },
  {
    id: 3,
    title: "React Router",
    level: "Intermediate",
    duration: "2 weeks",
    description:
      "Build multi-page single-page applications with routes, layouts and URL parameters.",
  },
  {
    id: 4,
    title: "Četvrti tečaj",
    level: "Beginner",
    duration: "4 weeks",
    description: "Neki tečaj po izboru",
  },
];

function Courses() {
  return (
    <section className="page">
      <div className="page-header">
        <p className="eyebrow">Available courses</p>
        <h1>Choose your next React topic</h1>
        <p>
          Explore a small collection of React courses and open the details page
          for each one.
        </p>
      </div>
      <section className="course-grid">
        {courses.map((course) => (
          <article key={course.id} className="course-card">
            <div className="course-meta">
              <span>{course.level}</span>
              <span>{course.duration}</span>
            </div>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <Link className="button primary" to={`/courses/${course.id}`}>
              View details
            </Link>
          </article>
        ))}
      </section>
    </section>
  );
}
export default Courses;
