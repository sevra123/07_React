import { NavLink, Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <h1>React Learning Studio</h1>
        <nav className="navigation">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/lessons"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Lessons
          </NavLink>
          <NavLink
            to="/resources"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Resources
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
        <p>&copy; 2026 React Learning Studio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default RootLayout;
