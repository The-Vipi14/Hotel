import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink to="/" onClick={() => setOpen(false)}>
          Ananda
        </NavLink>
      </div>

      <ul className={`nav-links ${open ? "active" : ""}`}>
        <li>
          <NavLink to="/" className={navClass} onClick={() => setOpen(false)}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/rooms"
            className={navClass}
            onClick={() => setOpen(false)}
          >
            Rooms
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/restaurant"
            className={navClass}
            onClick={() => setOpen(false)}
          >
            Restaurant
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/banquet"
            className={navClass}
            onClick={() => setOpen(false)}
          >
            Banquet
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/gallery"
            className={navClass}
            onClick={() => setOpen(false)}
          >
            Gallery
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/contact"
            className={navClass}
            onClick={() => setOpen(false)}
          >
            Contact
          </NavLink>
        </li>

        <li className="mobile-book-wrapper">
          <NavLink
            to="/reservation"
            className="mobile-book-btn"
            onClick={() => setOpen(false)}
          >
            Book Now
          </NavLink>
        </li>
      </ul>

      <NavLink to="/reservation" className="book-btn">
        Book Now
      </NavLink>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;