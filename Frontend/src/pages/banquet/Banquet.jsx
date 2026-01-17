import "./banquet.css"

const Banquet = () => {
  return (
    <section className="banquet">
      <div className="banquet-hero">
        <div className="banquet-overlay">
          <h2>Banquet & Events</h2>
          <p>Celebrate your special moments with elegance</p>
        </div>
      </div>

      <div className="banquet-content">
        <div className="banquet-info">
          <h3>Perfect Venue for Every Occasion</h3>
          <p>
            Aurora Grand Hotel offers a premium banquet hall designed to host
            weddings, conferences, corporate events, and private celebrations.
            Our elegant interiors and professional service ensure your event is
            truly memorable.
          </p>

          <ul>
            <li>✔ Spacious & Elegant Hall</li>
            <li>✔ Wedding & Reception Setup</li>
            <li>✔ Corporate Meetings & Conferences</li>
            <li>✔ Catering & Decoration Support</li>
            <li>✔ Audio & Visual Equipment</li>
          </ul>
        </div>

        <div className="event-booking">
          <h3>Book Your Event</h3>

          <form>
            <input type="text" placeholder="Your Name" />
            <input type="tel" placeholder="Mobile Number" />

            <select>
              <option>Select Event Type</option>
              <option>Wedding</option>
              <option>Conference</option>
              <option>Birthday Party</option>
              <option>Corporate Event</option>
            </select>

            <input type="date" />
            <input type="number" placeholder="Number of Guests" />

            <button type="submit">Send Inquiry</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Banquet
