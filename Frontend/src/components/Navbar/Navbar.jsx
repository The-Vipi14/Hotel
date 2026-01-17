// import { useState } from "react"
// import "./navbar.css"

// const Navbar = () => {
//   const [open, setOpen] = useState(false)

//   return (
//     <nav className="navbar">
//       <div className="logo">Aurora Grand</div>

//       <ul className={`nav-links ${open ? "active" : ""}`}>
//         <li>Home</li>
//         <li>Rooms</li>
//         <li>Restaurant</li>
//         <li>Banquet</li>
//         <li>Gallery</li>
//         <li>Contact</li>
//         <button className="mobile-book-btn">Book Now</button>
//       </ul>

//       <button className="book-btn">Book Now</button>

//       <div className="hamburger" onClick={() => setOpen(!open)}>
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>
//     </nav>
//   )
// }

// export default Navbar

import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Aurora Grand</Link>
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
        <Link to="/rooms">
          <button className="mobile-book-btn">Book Now</button>
        </Link>
      </ul>

      <Link to="/rooms">
        <button className="book-btn">Book Now</button>
      </Link>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
