import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DashboardCharts from "../../components/DashboardCharts/DashboardCharts";

const AdminDashboardPage = () => {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState(null);
  const [recentRoomBookings, setRecentRoomBookings] = useState([]);
  const [todayContactMessages, setTodayContactMessages] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);

      const res = await axios.get("http://localhost:5000/api/admin/dashboard", {
        withCredentials: true,
      });

      if (res.data.success) {
        setStats(res.data.stats);
        setRecentRoomBookings(res.data.recentRoomBookings);
        setTodayContactMessages(res.data.todayConotactMessages);
      }
    } catch (error) {
      console.error("Dashboard API error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h2>Loading dashboard...</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Admin Dashboard</h1>

      {/* ================= STATS ================= */}
      {stats && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "16px",
            marginBottom: "30px",
          }}
        >
          <StatCard title="Room Bookings" value={stats.totalRoomBookings} />
          <StatCard title="Table Bookings" value={stats.totalTableBookings} />
          <StatCard title="Event Inquiries" value={stats.totalEventInquiries} />
          <StatCard
            title="Contact Messages"
            value={stats.totalContactMessages}
          />
        </div>
      )}
      {stats && (
        <DashboardCharts
          stats={stats}
          recentRoomBookings={recentRoomBookings}
        />
      )}

      {/* ================= RECENT ROOM BOOKINGS ================= */}
      <section style={{ marginBottom: "40px" }}>
        <h2>Recent Room Bookings</h2>

        {recentRoomBookings.length === 0 ? (
          <p>No bookings found</p>
        ) : (
          <table border="1" cellPadding="10" cellSpacing="0" width="100%">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Room Type</th>
                <th>Guests</th>
                <th>Check In</th>
                <th>Check Out</th>
                {/* <th>Status</th> */}
              </tr>
            </thead>

            <tbody>
              {recentRoomBookings.map((booking) => (
                <tr key={booking._id}>
                  <td>{booking.name}</td>
                  <td>{booking.phone}</td>
                  <td>{booking.roomType}</td>
                  <td>{booking.guests}</td>
                  <td>{new Date(booking.checkIn).toLocaleDateString()}</td>
                  <td>{new Date(booking.checkOut).toLocaleDateString()}</td>
                  {/* <td>{booking.status}</td> */}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      {/* ================= TODAY CONTACT MESSAGES ================= */}
      <section>
        <h2>Today's Contact Messages</h2>

        {todayContactMessages.length === 0 ? (
          <p>No contact messages today</p>
        ) : (
          <ul>
            {todayContactMessages.map((msg) => (
              <li key={msg._id}>
                {msg.name} - {msg.email}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

/* ================= STAT CARD COMPONENT ================= */

const StatCard = ({ title, value }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "16px",
        borderRadius: "8px",
        background: "#f9f9f9",
        textAlign: "center",
      }}
    >
      <h3>{title}</h3>
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>{value}</p>
    </div>
  );
};

export default AdminDashboardPage;
