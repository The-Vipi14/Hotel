import { useState } from "react"
import "./contact.css"
import api from "../../utils/api"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })

  const submitContactMessage = async e => {
    e.preventDefault()

    try {
      const res = await api.post("/contact", formData)

      if (res.data.success) {
        alert("Message sent successfully")
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: ""
        })
      }
    } catch (err) {
      alert("Failed to send message")
      console.error(err)
    }
  }

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

          <form onSubmit={submitContactMessage}>
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={e =>
                setFormData({ ...formData, name: e.target.value })
              }
            />

            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={e =>
                setFormData({ ...formData, email: e.target.value })
              }
            />

            <input
              type="tel"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={e =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />

            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={e =>
                setFormData({ ...formData, message: e.target.value })
              }
            />

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
