import { Link } from "react-router-dom";
function NotFound() {
  return (
    <section className="page">
      <div className="empty-state">
        <h1>Page not found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link className="button primary" to="/">
          Go Home
        </Link>
      </div>
    </section>
  );
}
export default NotFound;
