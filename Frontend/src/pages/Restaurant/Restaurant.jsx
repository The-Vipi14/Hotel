import "./restaurant.css"

const Restaurant = () => {
  return (
    <section className="restaurant">
      <div className="restaurant-hero">
        <div className="restaurant-overlay">
          <h2>Fine Dining Experience</h2>
          <p>Delicious flavors crafted with perfection</p>
        </div>
      </div>

      <div className="restaurant-content">
        <div className="restaurant-info">
          <h3>Our Restaurant</h3>
          <p>
            Enjoy a world-class dining experience at Radiant Plaza. Our chefs
            prepare exquisite dishes using fresh ingredients, offering a
            perfect blend of taste, luxury, and comfort.
          </p>

          <ul>
            <li>✔ Multi-Cuisine Restaurant</li>
            <li>✔ Luxury Ambience</li>
            <li>✔ Family & Couple Friendly</li>
            <li>✔ Open for Lunch & Dinner</li>
          </ul>
        </div>

        <div className="table-booking">
          <h3>Book a Table</h3>

          <form>
            <input type="text" placeholder="Your Name" />
            <input type="tel" placeholder="Mobile Number" />
            <input type="date" />
            <input type="time" />

            <select>
              <option>2 People</option>
              <option>4 People</option>
              <option>6 People</option>
              <option>8 People</option>
            </select>

            <button type="submit">Reserve Table</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Restaurant
