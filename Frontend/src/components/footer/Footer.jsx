import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Aurora Grand Hotel</h3>
          <p>
            Experience comfort, elegance, and premium hospitality. We ensure
            every stay is memorable and every moment special.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Rooms</li>
            <li>Restaurant</li>
            <li>Banquet</li>
            <li>Gallery</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p>📍 New Delhi, India</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ contact@auroragrandhotel.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Aurora Grand Hotel. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
