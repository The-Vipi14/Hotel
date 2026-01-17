import { useState } from "react"
import "./navbar.css"

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="logo">Aurora Grand</div>

      <ul className={`nav-links ${open ? "active" : ""}`}>
        <li>Home</li>
        <li>Rooms</li>
        <li>Restaurant</li>
        <li>Banquet</li>
        <li>Gallery</li>
        <li>Contact</li>
        <button className="mobile-book-btn">Book Now</button>
      </ul>

      <button className="book-btn">Book Now</button>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  )
}

export default Navbar
