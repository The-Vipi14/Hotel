import { useEffect, useState } from "react"
import "./restaurant.css"

const images = [
  "https://images.unsplash.com/photo-1552566626-52f8b828add9",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de",
  "https://images.unsplash.com/photo-1544148103-0773bf10d330",
  "https://images.unsplash.com/photo-1528605248644-14dd04022da1"
]

const Restaurant = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="restaurant">
      <div className="restaurant-hero">
        {images.map((img, i) => (
          <div
            key={i}
            className={`hero-slide ${i === index ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        <div className="restaurant-overlay">
          <h2>Fine Dining Experience</h2>
          <p>Where taste meets elegance</p>
        </div>
      </div>

      <div className="restaurant-content">
        <div className="restaurant-info">
          <h3>Our Signature Restaurant</h3>

          <p>
            Designed for guests who appreciate refined flavors and elegant
            surroundings, our restaurant brings together culinary excellence
            and warm hospitality.
          </p>

          <p>
            From thoughtfully crafted dishes to calm interiors and attentive
            service, every detail is curated to create an unforgettable dining
            experience.
          </p>

          <ul className="restaurant-highlights">
            <li>Multi-Cuisine Fine Dining</li>
            <li>Luxury Indoor Ambience</li>
            <li>Private Dining Options</li>
            <li>Curated Seasonal Menus</li>
          </ul>
        </div>

        <div className="table-booking">
          <h3>Reserve Your Table</h3>

          <form>
            <input type="text" placeholder="Your Name" />
            <input type="tel" placeholder="Mobile Number" />

            <div className="form-row">
              <input type="date" />
              <input type="time" />
            </div>

            <select>
              <option>2 Guests</option>
              <option>4 Guests</option>
              <option>6 Guests</option>
              <option>8 Guests</option>
            </select>

            <button type="submit">Reserve Table</button>
          </form>
        </div>
      </div>

      <div className="restaurant-extras">
        <h3>What Makes Our Dining Special</h3>

        <div className="extras-grid">
          <div className="extra-card"  data-aos="zoom-in" data-aos-delay="100">
            <img src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092" alt="" />
            <h4>Signature Dishes</h4>
            <p>
              Chef-recommended specialties inspired by global cuisines and
              premium ingredients.
            </p>
          </div>

          <div className="extra-card"  data-aos="zoom-in" data-aos-delay="100">
            <img src="https://images.unsplash.com/photo-1528605248644-14dd04022da1" alt="" />
            <h4>Elegant Ambience</h4>
            <p>
              Soft lighting and refined interiors designed for calm, luxurious
              dining.
            </p>
          </div>

          <div className="extra-card"  data-aos="zoom-in" data-aos-delay="100">
            <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de" alt="" />
            <h4>Exceptional Service</h4>
            <p>
              Trained staff delivering attentive service with a warm and
              welcoming approach.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Restaurant
