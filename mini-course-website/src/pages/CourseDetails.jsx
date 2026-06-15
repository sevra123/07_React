import { Link, useParams } from "react-router-dom";
import { courses } from "../data/courses";

const courses = [
  {
    id: 1,
    title: "React Basics",
    level: "Beginner",
    duration: "4 weeks",
    description:
      "Learn components, JSX, props, state and the basic React mental model.",
    topics: ["JSX", "Components", "Props", "State"],
  },
  {
    id: 2,
    title: "React Forms",
    level: "Intermediate",
    duration: "3 weeks",
    description:
      "Practice controlled inputs, validation, submit handling and reusable form patterns.",
    topics: [
      "Controlled inputs",
      "Validation",
      "Submit handling",
      "Reusable forms",
    ],
  },
  {
    id: 3,
    title: "React Router",
    level: "Intermediate",
    duration: "2 weeks",
    description:
      "Build multi-page single-page applications with routes, layouts and URL parameters.",
    topics: ["Routes", "Link", "NavLink", "useParams"],
  },
  {
    id: 4,
    title: "Četvrti tečaj",
    level: "Beginner",
    duration: "4 weeks",
    description: "Neki tečaj po izboru",
    topics: ["Neke", "teme", "za", "vjezbu"],
  },
];

function CourseDetails() {
  const { id } = useParams();
  const courseId = Number(id);
  const course = courses.find((item) => item.id === courseId);
  if (!course) {
    return (
      <section className="page">
        <div className="empty-state">
          <h1>Course not found</h1>
          <p>The course you are looking for does not exist.</p>
          <Link className="button primary" to="/courses">
            Back to Courses
          </Link>
        </div>
      </section>
    );
  }
  return (
    <section className="page">
      <Link className="back-link" to="/courses">
        ← Back to Courses
      </Link>
      <article className="details-card">
        <p className="eyebrow">Course details</p>
        <h1>{course.title}</h1>
        <div className="course-meta details-meta">
          <span>{course.level}</span>
          <span>{course.duration}</span>
        </div>
        <p>{course.description}</p>
        <h2>What you will practice</h2>
        <ul className="topic-list">
          {course.topics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
      </article>
    </section>
  );
}
export default CourseDetails;
