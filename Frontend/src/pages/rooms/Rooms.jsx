// import { useState } from "react";
// import "./rooms.css";

// const Rooms = () => {
//   const allRooms = [
//     {
//       id: 1,
//       name: "Deluxe Room",
//       price: "₹3,500 / Night",
//       img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32",
//       facilities: [
//         "King Size Bed",
//         "Free WiFi",
//         "Air Conditioning",
//         "LED TV",
//         "24x7 Room Service",
//       ],
//     },
//     {
//       id: 2,
//       name: "Executive Room",
//       price: "₹4,500 / Night",
//       img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304",
//       facilities: [
//         "City View",
//         "Breakfast Included",
//         "Work Desk",
//         "Mini Fridge",
//         "Premium Bedding",
//       ],
//     },
//     {
//       id: 3,
//       name: "Suite Room",
//       price: "₹6,500 / Night",
//       img: "https://images.unsplash.com/photo-1590490360182-c33d57733427",
//       facilities: [
//         "Separate Living Area",
//         "Bathtub",
//         "Luxury Interior",
//         "Sofa Set",
//         "Private Balcony",
//       ],
//     },
//     {
//       id: 4,
//       name: "Superior Room",
//       price: "₹3,900 / Night",
//       img: "https://www.oppeinhome.com/upload/images/ueditor/20230830/guide-to-design-luxury-bedroom-2.webp",
//       facilities: [
//         "Queen Bed",
//         "Smart TV",
//         "High Speed WiFi",
//         "Tea/Coffee Maker",
//       ],
//     },
//     {
//       id: 5,
//       name: "Premium Room",
//       price: "₹5,200 / Night",
//       img: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
//       facilities: [
//         "Luxury Bathroom",
//         "Pool View",
//         "Extra Spacious",
//         "Premium Amenities",
//       ],
//     },
//     {
//       id: 6,
//       name: "Family Room",
//       price: "₹5,800 / Night",
//       img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
//       facilities: [
//         "Two Double Beds",
//         "Kids Friendly",
//         "Large Space",
//         "Dining Area",
//       ],
//     },
//     {
//       id: 7,
//       name: "Business Suite",
//       price: "₹7,200 / Night",
//       img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
//       facilities: [
//         "Meeting Space",
//         "High Speed Internet",
//         "Executive Desk",
//         "Premium Service",
//       ],
//     },
//     {
//       id: 8,
//       name: "Luxury Suite",
//       price: "₹8,500 / Night",
//       img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
//       facilities: [
//         "Jacuzzi",
//         "Panoramic View",
//         "Private Lounge",
//         "Butler Service",
//       ],
//     },
//     {
//       id: 9,
//       name: "Presidential Suite",
//       price: "₹12,000 / Night",
//       img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
//       facilities: [
//         "Private Dining",
//         "Luxury Living Room",
//         "Premium Security",
//         "Exclusive Services",
//       ],
//     },
//   ];

//   const [visibleCount, setVisibleCount] = useState(3);
//   const [activeRoom, setActiveRoom] = useState(null);

//   return (
//     <section className="rooms">
//       <h2>Our Rooms</h2>
//       <p className="subtitle">Comfort designed for every guest</p>

//       <div className="room-grid">
//         {allRooms.slice(0, visibleCount).map((room) => (
//           <div className="room-card" data-aos="fade-up" key={room.id}>
//             <img src={room.img} alt={room.name} />

//             <div className="room-info">
//               <h3>{room.name}</h3>
//               <span className="price">{room.price}</span>

//               <div className="room-actions">
//                 <button
//                   className="facility-btn"
//                   onClick={() => setActiveRoom(room)}
//                 >
//                   View Facilities
//                 </button>
//                 <button className="book-btn">Book Now</button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {visibleCount < allRooms.length && (
//         <div className="view-more">
//           <button onClick={() => setVisibleCount(visibleCount + 6)}>
//             View More Rooms
//           </button>
//         </div>
//       )}

//       {activeRoom && (
//         <div className="modal-overlay" onClick={() => setActiveRoom(null)}>
//           <div className="modal" onClick={(e) => e.stopPropagation()}>
//             <button className="close-btn" onClick={() => setActiveRoom(null)}>
//               ×
//             </button>

//             <img src={activeRoom.img} alt={activeRoom.name} />

//             <h3>{activeRoom.name}</h3>

//             <ul>
//               {activeRoom.facilities.map((item, index) => (
//                 <li key={index}>{item}</li>
//               ))}
//             </ul>
//             <button className="book-btn">Book Now</button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Rooms;


















import { useState } from "react"
import "./rooms.css"

const Rooms = () => {
  const allRooms = [
    {
      id: 1,
      name: "Deluxe Room",
      price: "₹3,500 / Night",
      img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32",
      facilities: [
        "King Size Bed",
        "Free WiFi",
        "Air Conditioning",
        "LED TV",
        "24x7 Room Service"
      ]
    },
    {
      id: 2,
      name: "Executive Room",
      price: "₹4,500 / Night",
      img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304",
      facilities: [
        "City View",
        "Breakfast Included",
        "Work Desk",
        "Mini Fridge",
        "Premium Bedding"
      ]
    },
    {
      id: 3,
      name: "Suite Room",
      price: "₹6,500 / Night",
      img: "https://images.unsplash.com/photo-1590490360182-c33d57733427",
      facilities: [
        "Separate Living Area",
        "Bathtub",
        "Luxury Interior",
        "Sofa Set",
        "Private Balcony"
      ]
    },
    {
      id: 4,
      name: "Superior Room",
      price: "₹3,900 / Night",
      img: "https://www.oppeinhome.com/upload/images/ueditor/20230830/guide-to-design-luxury-bedroom-2.webp",
      facilities: [
        "Queen Bed",
        "Smart TV",
        "High Speed WiFi",
        "Tea/Coffee Maker"
      ]
    },
    {
      id: 5,
      name: "Premium Room",
      price: "₹5,200 / Night",
      img: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
      facilities: [
        "Luxury Bathroom",
        "Pool View",
        "Extra Spacious",
        "Premium Amenities"
      ]
    },
    {
      id: 6,
      name: "Family Room",
      price: "₹5,800 / Night",
      img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      facilities: [
        "Two Double Beds",
        "Kids Friendly",
        "Large Space",
        "Dining Area"
      ]
    },
    {
      id: 7,
      name: "Business Suite",
      price: "₹7,200 / Night",
      img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
      facilities: [
        "Meeting Space",
        "High Speed Internet",
        "Executive Desk",
        "Premium Service"
      ]
    },
    {
      id: 8,
      name: "Luxury Suite",
      price: "₹8,500 / Night",
      img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
      facilities: [
        "Jacuzzi",
        "Panoramic View",
        "Private Lounge",
        "Butler Service"
      ]
    },
    {
      id: 9,
      name: "Presidential Suite",
      price: "₹12,000 / Night",
      img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
      facilities: [
        "Private Dining",
        "Luxury Living Room",
        "Premium Security",
        "Exclusive Services"
      ]
    }
  ]

  const [visibleCount, setVisibleCount] = useState(3)
  const [activeRoom, setActiveRoom] = useState(null)

  return (
    <section className="rooms">
      <h2 data-aos="fade-up">Our Rooms</h2>
      <p className="subtitle" data-aos="fade-up">
        Comfort designed for every guest
      </p>

      <div className="room-grid">
        {allRooms.slice(0, visibleCount).map(room => (
          <div className="room-card" data-aos="fade-up" key={room.id}>
            <img src={room.img} alt={room.name} />

            <div className="room-info">
              <h3>{room.name}</h3>
              <span className="price">{room.price}</span>

              <div className="room-actions">
                <button
                  className="facility-btn"
                  onClick={() => setActiveRoom(room)}
                >
                  View Facilities
                </button>
                <button className="book-btn">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < allRooms.length && (
        <div className="view-more" data-aos="fade-up">
          <button onClick={() => setVisibleCount(visibleCount + 6)}>
            View More Rooms
          </button>
        </div>
      )}

      {activeRoom && (
        <div className="modal-overlay" onClick={() => setActiveRoom(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setActiveRoom(null)}>
              ×
            </button>

            <img src={activeRoom.img} alt={activeRoom.name} />

            <h3>{activeRoom.name}</h3>

            <ul>
              {activeRoom.facilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <button className="book-btn modal-book">Book Now</button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Rooms
