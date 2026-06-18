import { NavLink, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="brand">React Academy</div>
        <nav className="navigation">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/courses"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Courses
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>
        </nav>
      </header>
      <main className="site-main">
        <Outlet />
      </main>
      <footer className="site-footer">
        <p>&copy; 2026 React Academy. Built with React Router.</p>
      </footer>
    </div>
  );
}

export default RootLayout;
