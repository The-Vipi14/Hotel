// import "./home.css"

// const Home = () => {
//   return (
//     <section className="hero">
//       <div className="hero-overlay">
//         <h1>Welcome</h1>
//         <p>Luxury • Comfort • Elegance</p>

//         {/* <div className="booking-box">
//           <input type="date" />
//           <input type="date" />

//           <select>
//             <option>1 Guest</option>
//             <option>2 Guests</option>
//             <option>3 Guests</option>
//             <option>4 Guests</option>
//           </select>

//           <button>Check Availability</button>
//         </div> */}
//       </div>
//     </section>
//   )
// }

// export default Home


import "./home.css"

const Home = () => {
  return (
    <section className="home">
      <div className="hero">
        <div className="hero-overlay">
          <h1>Welcome to Aurora Grand Hotel</h1>
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
      </div>

      <div className="about">
        <div className="about-text">
          <h2>About Aurora Grand</h2>
          <p>
            Aurora Grand Hotel is a perfect blend of modern luxury and warm
            hospitality. Located in the heart of the city, we provide an
            exceptional stay experience for business travelers, families, and
            couples.
          </p>
          <p>
            From elegant rooms to fine dining and premium event spaces, every
            detail is designed to make your stay comfortable and memorable.
          </p>
        </div>

        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945" alt="Hotel" />
        </div>
      </div>

      <div className="features">
        <h2>Why Choose Us</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>Prime Location</h3>
            <p>Easy access to business hubs, shopping areas, and tourist spots.</p>
          </div>

          <div className="feature-card">
            <h3>Luxury Rooms</h3>
            <p>Spacious rooms with modern interiors and premium facilities.</p>
          </div>

          <div className="feature-card">
            <h3>Fine Dining</h3>
            <p>Multi-cuisine restaurant offering rich flavors and quality service.</p>
          </div>

          <div className="feature-card">
            <h3>Event Spaces</h3>
            <p>Perfect venues for weddings, conferences, and celebrations.</p>
          </div>
        </div>
      </div>

      <div className="home-rooms">
        <h2>Featured Rooms</h2>

        <div className="home-room-grid">
          <div className="home-room-card">
            <img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32" alt="Room" />
            <h3>Deluxe Room</h3>
            <p>Comfortable stay with elegant interiors.</p>
          </div>

          <div className="home-room-card">
            <img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304" alt="Room" />
            <h3>Executive Room</h3>
            <p>Perfect for business travelers.</p>
          </div>

          <div className="home-room-card">
            <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427" alt="Room" />
            <h3>Suite Room</h3>
            <p>Luxury living with extra space and comfort.</p>
          </div>
        </div>
      </div>

      <div className="cta">
        <h2>Plan Your Stay With Us</h2>
        <p>Experience premium hospitality and unmatched comfort.</p>
        <button>Book Your Stay</button>
      </div>
    </section>
  )
}

export default Home
