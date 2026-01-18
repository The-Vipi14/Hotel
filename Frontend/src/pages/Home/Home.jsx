import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";

const images = [
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
  "https://images.unsplash.com/photo-1566073771259-6a8506099945",
  "https://images.unsplash.com/photo-1501117716987-c8e1ecb210c8",
  "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
];

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="home">
      <div className="hero">
        {images.map((img, i) => (
          <div
            key={i}
            className={`hero-slide ${i === index ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        <div className="hero-overlay">
          <h1 style={{color:"#fff"}} data-aos="fade-down">Welcome to Ananda Hotel</h1>
          <p data-aos="fade-down">Luxury • Comfort • Elegance</p>
          <Link style={{textDecoration:"none"}} to={"/reservation"} data-aos="fade-down" className="res-btn">
            Reservation
          </Link>
        </div>
      </div>

      <div className="about">
        <div className="about-text" data-aos="fade-right">
          <h2>About Ananda</h2>
          <p>
            Ananda Hotel is a perfect blend of modern luxury and warm
            hospitality. Located in the heart of the city, we provide an
            exceptional stay experience for business travelers, families, and
            couples.
          </p>
          <p>
            From elegant rooms to fine dining and premium event spaces, every
            detail is designed to make your stay comfortable and memorable.
          </p>
        </div>

        <div className="about-image" data-aos="fade-left">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
            alt="Hotel"
          />
        </div>
      </div>

      <div className="features">
        <h2 data-aos="fade-up">Why Choose Us</h2>

        <div className="feature-grid">
          <div className="feature-card" data-aos="fade-up">
            <h3>Prime Location</h3>
            <p>
              Easy access to business hubs, shopping areas, and tourist spots.
            </p>
          </div>

          <div className="feature-card" data-aos="fade-up" data-aos-delay="100">
            <h3>Luxury Rooms</h3>
            <p>Spacious rooms with modern interiors and premium facilities.</p>
          </div>

          <div className="feature-card" data-aos="fade-up" data-aos-delay="200">
            <h3>Fine Dining</h3>
            <p>
              Multi-cuisine restaurant offering rich flavors and quality
              service.
            </p>
          </div>

          <div className="feature-card" data-aos="fade-up" data-aos-delay="300">
            <h3>Event Spaces</h3>
            <p>Perfect venues for weddings, conferences, and celebrations.</p>
          </div>
        </div>
      </div>

      <div className="home-rooms">
        <h2 data-aos="fade-up">Featured Rooms</h2>

        <div className="home-room-grid">
          <div className="home-room-card" data-aos="zoom-in">
            <img
              src="https://images.unsplash.com/photo-1611892440504-42a792e24d32"
              alt="Room"
            />
            <h3>Deluxe Room</h3>
            <p>Comfortable stay with elegant interiors.</p>
          </div>

          <div
            className="home-room-card"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <img
              src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304"
              alt="Room"
            />
            <h3>Executive Room</h3>
            <p>Perfect for business travelers.</p>
          </div>

          <div
            className="home-room-card"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <img
              src="https://images.unsplash.com/photo-1590490360182-c33d57733427"
              alt="Room"
            />
            <h3>Suite Room</h3>
            <p>Luxury living with extra space and comfort.</p>
          </div>
        </div>
      </div>

      <div className="cta" data-aos="fade-up">
        <h2>Plan Your Stay With Us</h2>
        <p>Experience premium hospitality and unmatched comfort.</p>
        <button>
          <Link style={{textDecoration:"none", color:"#fff"}} to={"/reservation"}>Book Your Stay</Link>
        </button>
      </div>
    </section>
  );
};

export default Home;
