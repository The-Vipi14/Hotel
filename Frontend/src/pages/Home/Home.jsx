import "./home.css"

const Home = () => {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <h1>Welcome</h1>
        <p>Luxury • Comfort • Elegance</p>

        <div className="booking-box">
          <input type="date" />
          <input type="date" />

          <select>
            <option>1 Guest</option>
            <option>2 Guests</option>
            <option>3 Guests</option>
            <option>4 Guests</option>
          </select>

          <button>Check Availability</button>
        </div>
      </div>
    </section>
  )
}

export default Home
