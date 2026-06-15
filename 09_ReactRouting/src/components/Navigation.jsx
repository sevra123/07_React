import { Link, NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <NavLink to="/" style={{ padding: "0 10px" }}>
        Home
      </NavLink>
      <NavLink to="/about" style={{ padding: "0 10px" }}>
        About
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
        style={{ padding: "0 10px" }}
      >
        Contact
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
        style={{ padding: "0 10px" }}
      >
        Login
      </NavLink>
      <NavLink
        to="/products/54"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
        style={{ padding: "0 10px" }}
      >
        Product 54
      </NavLink>
    </nav>
  );
}

export default Navigation;
