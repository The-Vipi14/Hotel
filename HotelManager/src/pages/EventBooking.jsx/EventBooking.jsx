import { useEffect, useState } from "react";
import "./events.css";

const EventBooking = () => {
  const [allEvents, setAllEvents] = useState([]);
  const [todayEvents, setTodayEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/admin/events", {
          credentials: "include",
        });        
        const data = await res.json();

        setAllEvents(data.EventBookings || []);
        setTodayEvents(data.todayEventBookings || []);
      } catch (error) {
        console.error("Failed to fetch event bookings");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <h3>Loading event bookings...</h3>;

  const renderTable = (events) => (
    <div className="event-table-wrapper">
      <table className="event-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Event Type</th>
            <th>Event Date</th>
            <th>Guests</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {events.length === 0 ? (
            <tr>
              <td colSpan="6">No event bookings found</td>
            </tr>
          ) : (
            events.map((event) => (
              <tr key={event._id}>
                <td>{event.name}</td>
                <td>{event.phone}</td>
                <td>{event.eventType}</td>
                <td>{new Date(event.eventDate).toLocaleDateString()}</td>
                <td>{event.guests}</td>
                <td className="event-message">
                  {event.message || "-"}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="event-page">
      <h2 className="event-title">Today’s Events</h2>
      {renderTable(todayEvents)}

      <h2 className="event-title" style={{ marginTop: "40px" }}>
        All Event Bookings
      </h2>
      {renderTable(allEvents)}
    </div>
  );
};

export default EventBooking;
