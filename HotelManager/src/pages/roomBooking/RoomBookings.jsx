import {useState,useEffect} from "react";

const RoomBookings = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRoomBookings = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/admin/rooms",{
          credentials:"include"
        });
        const data = await res.json();
        setRooms(data.roomBookingDetails || []);
      } catch (error) {
        console.error("Failed to fetch room bookings");
      } finally {
        setLoading(false);
      }
    };

    fetchRoomBookings();
  }, []);

  if (loading) {
    return <h3>Loading room bookings...</h3>;
  }

  return (
    <div className="rooms-page">
      <h2>Room Bookings</h2>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Room Type</th>
              <th>Guests</th>
              <th>Check In</th>
              <th>Check Out</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {rooms.length === 0 ? (
              <tr>
                <td colSpan="7">No bookings found</td>
              </tr>
            ) : (
              rooms.map((room) => (
                <tr key={room._id}>
                  <td>{room.name}</td>
                  <td>{room.phone}</td>
                  <td>{room.roomType}</td>
                  <td>{room.guests}</td>
                  <td>{new Date(room.checkIn).toLocaleDateString()}</td>
                  <td>{new Date(room.checkOut).toLocaleDateString()}</td>
                  <td>
                    <span className={`status ${room.status}`}>
                      {room.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RoomBookings;
