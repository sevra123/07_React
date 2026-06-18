import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="page empty-state">
      <h1>Page not found</h1>

      <p>
        The page you are looking for does not exist. You can return to the home
        page and continue browsing.
      </p>

      <Link className="button" to="/">
        Go to Home
      </Link>
    </section>
  );
}

export default NotFound;
