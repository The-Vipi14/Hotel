import "./footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Ananda Hotel</h3>
          <p>
            Experience comfort, elegance, and premium hospitality. We ensure
            every stay is memorable and every moment special.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <Link style={{ textDecoration: "none", color: "#fff" }} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "#fff" }}
                to="/rooms"
              >
                Rooms
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "#fff" }}
                to="/restaurant"
              >
                Restaurant
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "#fff" }}
                to="/banquet"
              >
                Banquet
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "#fff" }}
                to="/gallery"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                style={{ textDecoration: "none", color: "#fff" }}
                to="/contact"
              >
                Contact
              </Link>
            </li>
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
        © {new Date().getFullYear()} Ananda Hotel. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
