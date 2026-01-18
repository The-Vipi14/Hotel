import { useEffect, useState } from "react"
import "./banquet.css"
import api from "../../utils/api"
import { toast } from "react-toastify"


const images = [
  "https://images.unsplash.com/photo-1542665952-14513db15293?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1520033222127-8f6d08b425f6?q=80&w=1381&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1624763149686-1893acf73092?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1592861956120-e524fc739696",
  "https://plus.unsplash.com/premium_photo-1661775263105-57b126d6bb4e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
]

const Banquet = () => {
  const [index, setIndex] = useState(0)

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guests: ""
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length)
    }, 1800)
    return () => clearInterval(interval)
  }, [])

  const submitEventInquiry = async e => {
    e.preventDefault()

    try {
      const res = await api.post("/events/inquiry", formData)

      if (res.data.success) {
        toast.success("Event inquiry sent successfully")
        setFormData({
          name: "",
          phone: "",
          eventType: "",
          eventDate: "",
          guests: ""
        })
      }
    } catch (err) {
      toast.error("Failed to send inquiry")
      console.error(err)
    }
  }

  return (
    <section className="banquet">
      <div className="banquet-hero">
        {images.map((img, i) => (
          <div
            key={i}
            className={`banquet-slide ${i === index ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        <div className="banquet-overlay">
          <h2 data-aos="fade-down">Banquet & Events</h2>
          <p data-aos="fade-down">
            Celebrate your special moments with elegance
          </p>
        </div>
      </div>

      <div className="banquet-content">
        <div className="banquet-info">
          <h3>Perfect Venue for Every Occasion</h3>
          <p>
            Aurora Grand Hotel offers elegant banquet halls designed for
            weddings, receptions, corporate events, and private celebrations.
            Our refined interiors and expert planning ensure a flawless event
            experience.
          </p>

          <p>
            From grand celebrations to intimate gatherings, we provide flexible
            spaces, curated décor, and premium services tailored to your needs.
          </p>

          <ul className="banquet-highlights">
            <li>Spacious & Elegant Halls</li>
            <li>Wedding & Reception Décor</li>
            <li>Corporate Meetings & Conferences</li>
            <li>Custom Catering & Menu Planning</li>
            <li>Advanced Audio & Visual Setup</li>
          </ul>
        </div>

        <div className="event-booking">
          <h3>Plan Your Event</h3>

          <form onSubmit={submitEventInquiry}>
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={e =>
                setFormData({ ...formData, name: e.target.value })
              }
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              value={formData.phone}
              onChange={e =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />

            <select
              value={formData.eventType}
              onChange={e =>
                setFormData({ ...formData, eventType: e.target.value })
              }
            >
              <option value="">Select Event Type</option>
              <option>Wedding</option>
              <option>Reception</option>
              <option>Corporate Event</option>
              <option>Birthday Celebration</option>
            </select>

            <input
              type="date"
              value={formData.eventDate}
              onChange={e =>
                setFormData({ ...formData, eventDate: e.target.value })
              }
            />

            <input
              type="number"
              placeholder="Number of Guests"
              value={formData.guests}
              onChange={e =>
                setFormData({ ...formData, guests: e.target.value })
              }
            />

            <button type="submit">Send Inquiry</button>
          </form>
        </div>
      </div>

      <div className="banquet-gallery">
        <h3>Moments from Our Events</h3>

        <div className="banquet-grid">
          <img data-aos="fade-up" src="https://images.unsplash.com/photo-1579254216656-3c0c16a3bdd6?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <img data-aos="fade-up" src="https://images.unsplash.com/photo-1675247488725-22d1b78e75db?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <img data-aos="fade-up" src="https://plus.unsplash.com/premium_photo-1673626578328-d72e1e75202b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <img data-aos="fade-up" src="https://plus.unsplash.com/premium_photo-1678310301887-dad749ca881d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <img data-aos="fade-up" src="https://images.unsplash.com/photo-1666617710768-425d2d9088f8?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          <img data-aos="fade-up" src="https://images.unsplash.com/photo-1568530873454-e4103a0b3c71?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Banquet
