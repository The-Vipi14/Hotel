import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Ananda</Link>
      </div>

      <ul className={`nav-links ${open ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/rooms" onClick={() => setOpen(false)}>
            Rooms
          </Link>
        </li>
        <li>
          <Link to="/restaurant" onClick={() => setOpen(false)}>
            Restaurant
          </Link>
        </li>
        <li>
          <Link to="/banquet" onClick={() => setOpen(false)}>
            Banquet
          </Link>
        </li>
        <li>
          <Link to="/gallery" onClick={() => setOpen(false)}>
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
        </li>
        <Link to="/reservation">
          <button className="mobile-book-btn">Book Now</button>
        </Link>
      </ul>
      <button className="book-btn">
        <Link style={{ textDecoration: "none", color:"black" }} to="/reservation">
          Book Now
        </Link>
      </button>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
