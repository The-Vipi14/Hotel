import "./rooms.css"

const Rooms = () => {
  const rooms = [
    {
      id: 1,
      name: "Deluxe Room",
      price: "₹3,500 / Night",
      img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32",
      features: "King Bed • Free WiFi • AC • TV"
    },
    {
      id: 2,
      name: "Executive Room",
      price: "₹4,500 / Night",
      img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304",
      features: "Luxury Interior • City View • Breakfast"
    },
    {
      id: 3,
      name: "Suite Room",
      price: "₹6,500 / Night",
      img: "https://images.unsplash.com/photo-1590490360182-c33d57733427",
      features: "Premium Suite • Living Area • Bathtub"
    }
  ]

  return (
    <section className="rooms">
      <h2>Our Rooms</h2>
      <p className="subtitle">Experience comfort and luxury</p>

      <div className="room-grid">
        {rooms.map(room => (
          <div className="room-card" key={room.id}>
            <img src={room.img} alt={room.name} />

            <div className="room-info">
              <h3>{room.name}</h3>
              <p className="features">{room.features}</p>
              <div className="room-footer">
                <span className="price">{room.price}</span>
                <button>Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Rooms
