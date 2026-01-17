import "./navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Hotel</div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Rooms</li>
        <li>Restaurant</li>
        <li>Banquet</li>
        <li>Gallery</li>
        <li>Contact</li>
      </ul>

      <button className="book-btn">Book Now</button>
    </nav>
  )
}

export default Navbar
