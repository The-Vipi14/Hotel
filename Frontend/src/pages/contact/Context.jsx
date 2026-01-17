import "./contact.css"

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-hero">
        <div className="contact-overlay">
          <h2>Contact Us</h2>
          <p>We would love to hear from you</p>
        </div>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h3>Aurora Grand Hotel</h3>
          <p>
            Reach out to us for bookings, inquiries, or any assistance. Our team
            is always ready to help you plan a comfortable and memorable stay.
          </p>

          <div className="info-item">📍 New Delhi, India</div>
          <div className="info-item">📞 +91 98765 43210</div>
          <div className="info-item">✉️ contact@auroragrandhotel.com</div>
        </div>

        <div className="contact-form">
          <h3>Send a Message</h3>

          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <input type="tel" placeholder="Phone Number" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      <div className="map">
        <iframe
          title="hotel-location"
          src="https://www.google.com/maps?q=New%20Delhi&output=embed"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  )
}

export default Contact
