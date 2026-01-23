// // Reservation.jsx
// import { useState } from "react";
// import "./reservation.css";
// import api from "../../utils/api";
// import { toast } from "react-toastify";
// const Reservation = () => {
//   const [active, setActive] = useState("room");
//   const [successMessage, setSuccessMessage] = useState("");

//   const handleSubmit = async (e, submitFn) => {
//     e.preventDefault();
//     try {
//       await submitFn();
//       setSuccessMessage("Reservation submitted successfully! ✓");
//       setTimeout(() => setSuccessMessage(""), 5000);
//       e.target.reset();
//     } catch (err) {
//       toast.error("Something went wrong. Please try again.");
//       console.error(err);
//     }
//   };

//   /* ================= ROOM ================= */
//   const submitRoom = async () => {
//     const form = new FormData(document.querySelector('form[data-type="room"]'));
//     await api.post("/rooms/book-room", {
//       name: form.get("name"),
//       phone: form.get("phone"),
//       checkIn: form.get("checkIn"),
//       checkOut: form.get("checkOut"),
//       roomType: form.get("roomType"),
//       guests: form.get("guests"),
//     });
//   };

//   /* ================= TABLE ================= */
//   const submitTable = async () => {
//     const form = new FormData(document.querySelector('form[data-type="table"]'));
//     await api.post("/tables/book-table", {
//       name: form.get("name"),
//       phone: form.get("phone"),
//       date: form.get("date"),
//       time: form.get("time"),
//       guests: form.get("guests"),
//     });
//   };

//   /* ================= EVENT ================= */
//   const submitEvent = async () => {
//     const form = new FormData(document.querySelector('form[data-type="event"]'));
//     await api.post("/events/inquiry", {
//       name: form.get("name"),
//       phone: form.get("phone"),
//       eventType: form.get("eventType"),
//       eventDate: form.get("eventDate"),
//       guests: form.get("guests"),
//       message: form.get("message"),
//     });
//   };

//   return (
//     <section className="reservation-section">
//       <div className="container">
//         <h1>Make a Reservation</h1>
//         <p className="subtitle">Book your stay, table or special event with ease</p>

//         {successMessage && (
//           <div className="success-message">{successMessage}</div>
//         )}

//         {/* Tabs */}
//         <div className="tabs">
//           <button
//             className={`tab ${active === "room" ? "active" : ""}`}
//             onClick={() => setActive("room")}
//           >
//             Room Booking
//           </button>
//           <button
//             className={`tab ${active === "table" ? "active" : ""}`}
//             onClick={() => setActive("table")}
//           >
//             Table Reservation
//           </button>
//           <button
//             className={`tab ${active === "event" ? "active" : ""}`}
//             onClick={() => setActive("event")}
//           >
//             Event Inquiry
//           </button>
//           <div
//             className="tab-indicator"
//             style={{
//               width: "33.33%",
//               transform: `translateX(${active === "room" ? 0 : active === "table" ? 100 : 200}%)`,
//             }}
//           />
//         </div>

//         {/* Forms */}
//         <div className="form-wrapper">
//           {/* ROOM FORM */}
//           {active === "room" && (
//             <form data-type="room" onSubmit={(e) => handleSubmit(e, submitRoom)}>
//               <div className="form-grid">
//                 <div className="input-group">
//                   <input name="name" required placeholder=" " />
//                   <label>Your Name</label>
//                 </div>

//                 <div className="input-group">
//                   <input name="phone" type="tel" required placeholder=" " />
//                   <label>Phone Number</label>
//                 </div>

//                 <div className="input-group">
//                   <input type="date" name="checkIn" required placeholder=" " />
//                   <label>Check-in</label>
//                 </div>

//                 <div className="input-group">
//                   <input type="date" name="checkOut" required placeholder=" " />
//                   <label>Check-out</label>
//                 </div>

//                 <div className="input-group">
//                   <select name="roomType" required defaultValue="">
//                     <option value="" disabled hidden></option>
//                     <option>Deluxe Room</option>
//                     <option>Executive Room</option>
//                     <option>Suite Room</option>
//                   </select>
//                   <label>Room Type</label>
//                 </div>

//                 <div className="input-group">
//                   <select name="guests" required defaultValue="">
//                     <option value="" disabled hidden></option>
//                     <option>1 Guest</option>
//                     <option>2 Guests</option>
//                     <option>3 Guests</option>
//                     <option>4 Guests</option>
//                   </select>
//                   <label>Guests</label>
//                 </div>
//               </div>

//               <button type="submit" className="submit-btn">
//                 Book Room Now
//               </button>
//             </form>
//           )}

//           {/* TABLE FORM */}
//           {active === "table" && (
//             <form data-type="table" onSubmit={(e) => handleSubmit(e, submitTable)}>
//               <div className="form-grid">
//                 <div className="input-group">
//                   <input name="name" required placeholder=" " />
//                   <label>Your Name</label>
//                 </div>

//                 <div className="input-group">
//                   <input name="phone" type="tel" required placeholder=" " />
//                   <label>Phone Number</label>
//                 </div>

//                 <div className="input-group">
//                   <input type="date" name="date" required placeholder=" " />
//                   <label>Date</label>
//                 </div>

//                 <div className="input-group">
//                   <input type="time" name="time" required placeholder=" " />
//                   <label>Time</label>
//                 </div>

//                 <div className="input-group full">
//                   <select name="guests" required defaultValue="">
//                     <option value="" disabled hidden></option>
//                     <option>2 Guests</option>
//                     <option>4 Guests</option>
//                     <option>6 Guests</option>
//                     <option>8 Guests</option>
//                   </select>
//                   <label>Number of Guests</label>
//                 </div>
//               </div>

//               <button type="submit" className="submit-btn">
//                 Reserve Table
//               </button>
//             </form>
//           )}

//           {/* EVENT FORM */}
//           {active === "event" && (
//             <form data-type="event" onSubmit={(e) => handleSubmit(e, submitEvent)}>
//               <div className="form-grid">
//                 <div className="input-group">
//                   <input name="name" required placeholder=" " />
//                   <label>Your Name</label>
//                 </div>

//                 <div className="input-group">
//                   <input name="phone" type="tel" required placeholder=" " />
//                   <label>Phone Number</label>
//                 </div>

//                 <div className="input-group">
//                   <select name="eventType" required defaultValue="">
//                     <option value="" disabled hidden></option>
//                     <option>Wedding</option>
//                     <option>Reception</option>
//                     <option>Corporate Event</option>
//                     <option>Birthday Party</option>
//                   </select>
//                   <label>Event Type</label>
//                 </div>

//                 <div className="input-group">
//                   <input type="date" name="eventDate" required placeholder=" " />
//                   <label>Event Date</label>
//                 </div>

//                 <div className="input-group">
//                   <input name="guests" type="number" min="1" required placeholder=" " />
//                   <label>Number of Guests</label>
//                 </div>

//                 <div className="input-group full">
//                   <textarea name="message" rows="4" placeholder=" "></textarea>
//                   <label>Event Details / Special Requests</label>
//                 </div>
//               </div>

//               <button type="submit" className="submit-btn">
//                 Send Event Inquiry
//               </button>
//             </form>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Reservation;


// Reservation.jsx
import { useState } from "react";
import "./reservation.css";
import api from "../../utils/api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Reservation = () => {
  const [active, setActive] = useState("room");

  /* ================= ROOM STATE ================= */
  const [roomData, setRoomData] = useState({
    name: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    roomType: "",
    guests: "",
  });

  /* ================= TABLE STATE ================= */
  const [tableData, setTableData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
  });

  /* ================= EVENT STATE ================= */
  const [eventData, setEventData] = useState({
    name: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guests: "",
    message: "",
  });

  /* ================= SUBMIT HANDLER ================= */
  const handleSubmit = async (submitFn, resetFn) => {
    try {
      await submitFn();
      toast.success("Reservation submitted successfully!");
      resetFn();
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error(error);
    }
  };

  /* ================= API CALLS ================= */
  const submitRoom = async () => {
    await api.post("/rooms/book-room", roomData);
  };

  const submitTable = async () => {
    await api.post("/tables/book-table", tableData);
  };

  const submitEvent = async () => {
    await api.post("/events/inquiry", eventData);
  };

  return (
    <section className="reservation-section">
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="container">
        <h1>Make a Reservation</h1>
        <p className="subtitle">
          Book your stay, table or special event with ease
        </p>

        {/* ================= TABS ================= */}
        <div className="tabs">
          <button
            className={`tab ${active === "room" ? "active" : ""}`}
            onClick={() => setActive("room")}
          >
            Room Booking
          </button>

          <button
            className={`tab ${active === "table" ? "active" : ""}`}
            onClick={() => setActive("table")}
          >
            Table Reservation
          </button>

          <button
            className={`tab ${active === "event" ? "active" : ""}`}
            onClick={() => setActive("event")}
          >
            Event Inquiry
          </button>

          <div
            className="tab-indicator"
            style={{
              width: "33.33%",
              transform: `translateX(${
                active === "room" ? 0 : active === "table" ? 100 : 200
              }%)`,
            }}
          />
        </div>

        {/* ================= FORMS ================= */}
        <div className="form-wrapper">

          {/* ===== ROOM FORM ===== */}
          {active === "room" && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(submitRoom, () =>
                  setRoomData({
                    name: "",
                    phone: "",
                    checkIn: "",
                    checkOut: "",
                    roomType: "",
                    guests: "",
                  })
                );
              }}
            >
              <div className="form-grid input-group">
                <input
                  placeholder="Your Name"
                  value={roomData.name}
                  onChange={(e) =>
                    setRoomData({ ...roomData, name: e.target.value })
                  }
                  required
                />

                <input
                  placeholder="Phone Number"
                  value={roomData.phone}
                  onChange={(e) =>
                    setRoomData({ ...roomData, phone: e.target.value })
                  }
                  required
                />

                <input
                  type="date"
                  value={roomData.checkIn}
                  onChange={(e) =>
                    setRoomData({ ...roomData, checkIn: e.target.value })
                  }
                  required
                />

                <input
                  type="date"
                  value={roomData.checkOut}
                  onChange={(e) =>
                    setRoomData({ ...roomData, checkOut: e.target.value })
                  }
                  required
                />

                <select
                  value={roomData.roomType}
                  onChange={(e) =>
                    setRoomData({ ...roomData, roomType: e.target.value })
                  }
                  required
                >
                  <option value="">Select Room</option>
                  <option>Deluxe Room</option>
                  <option>Executive Room</option>
                  <option>Suite Room</option>
                </select>

                <select
                  value={roomData.guests}
                  onChange={(e) =>
                    setRoomData({ ...roomData, guests: e.target.value })
                  }
                  required
                >
                  <option value="">Guests</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>

              <button type="submit" className="submit-btn">
                Book Room
              </button>
            </form>
          )}

          {/* ===== TABLE FORM ===== */}
          {active === "table" && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(submitTable, () =>
                  setTableData({
                    name: "",
                    phone: "",
                    date: "",
                    time: "",
                    guests: "",
                  })
                );
              }}
            >
              <div className="form-grid input-group">
                <input
                  placeholder="Your Name"
                  value={tableData.name}
                  onChange={(e) =>
                    setTableData({ ...tableData, name: e.target.value })
                  }
                  required
                />

                <input
                  placeholder="Phone Number"
                  value={tableData.phone}
                  onChange={(e) =>
                    setTableData({ ...tableData, phone: e.target.value })
                  }
                  required
                />

                <input
                  type="date"
                  value={tableData.date}
                  onChange={(e) =>
                    setTableData({ ...tableData, date: e.target.value })
                  }
                  required
                />

                <input
                  type="time"
                  value={tableData.time}
                  onChange={(e) =>
                    setTableData({ ...tableData, time: e.target.value })
                  }
                  required
                />

                <select
                  value={tableData.guests}
                  onChange={(e) =>
                    setTableData({ ...tableData, guests: e.target.value })
                  }
                  required
                >
                  <option value="">Guests</option>
                  <option>2</option>
                  <option>4</option>
                  <option>6</option>
                  <option>8</option>
                </select>
              </div>

              <button type="submit" className="submit-btn">
                Reserve Table
              </button>
            </form>
          )}

          {/* ===== EVENT FORM ===== */}
          {active === "event" && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(submitEvent, () =>
                  setEventData({
                    name: "",
                    phone: "",
                    eventType: "",
                    eventDate: "",
                    guests: "",
                    message: "",
                  })
                );
              }}
            >
              <div className="form-grid input-group" >
                <input
                  placeholder="Your Name"
                  value={eventData.name}
                  onChange={(e) =>
                    setEventData({ ...eventData, name: e.target.value })
                  }
                  required
                />

                <input
                  placeholder="Phone Number"
                  value={eventData.phone}
                  onChange={(e) =>
                    setEventData({ ...eventData, phone: e.target.value })
                  }
                  required
                />

                <select
                  value={eventData.eventType}
                  onChange={(e) =>
                    setEventData({ ...eventData, eventType: e.target.value })
                  }
                  required
                >
                  <option value="">Event Type</option>
                  <option>Wedding</option>
                  <option>Reception</option>
                  <option>Corporate Event</option>
                  <option>Birthday Party</option>
                </select>

                <input
                  type="date"
                  value={eventData.eventDate}
                  onChange={(e) =>
                    setEventData({ ...eventData, eventDate: e.target.value })
                  }
                  required
                />

                <input
                  type="number"
                  placeholder="Guests"
                  value={eventData.guests}
                  onChange={(e) =>
                    setEventData({ ...eventData, guests: e.target.value })
                  }
                  required
                />

                <textarea
                  placeholder="Message"
                  value={eventData.message}
                  onChange={(e) =>
                    setEventData({ ...eventData, message: e.target.value })
                  }
                />
              </div>

              <button type="submit" className="submit-btn">
                Send Inquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reservation;
