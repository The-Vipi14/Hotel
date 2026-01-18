import { useEffect, useState } from "react"
import "./dashboard.css"

const AdminDashboard = () => {
  const [stats, setStats] = useState(null)
  const [activeTab, setActiveTab] = useState("rooms")

  useEffect(() => {
    const fetchStats = async () => {
      const res = await fetch("http://localhost:5000/api/admin/dashboard", {
        credentials: "include"
      })
      const data = await res.json()
      if (data.success) setStats(data)
    }

    fetchStats()
  }, [])

  return (
    <div className="admin-wrapper">
      <aside className="admin-sidebar">
        <h2>Aurora Admin</h2>
        <button onClick={() => setActiveTab("rooms")}>Room Bookings</button>
        <button onClick={() => setActiveTab("tables")}>Table Bookings</button>
        <button onClick={() => setActiveTab("events")}>Event Inquiries</button>
      </aside>

      <main className="admin-main">
        <header className="admin-header">
          <h1>Dashboard</h1>
        </header>

        {stats && (
          <div className="stats-grid">
            <div className="stat-card">
              <h3>{stats.stats.totalRoomBookings}</h3>
              <p>Room Bookings</p>
            </div>
            <div className="stat-card">
              <h3>{stats.stats.totalTableBookings}</h3>
              <p>Table Bookings</p>
            </div>
            <div className="stat-card">
              <h3>{stats.stats.totalEventInquiries}</h3>
              <p>Event Inquiries</p>
            </div>
          </div>
        )}

        <section className="admin-table-section">
          {activeTab === "rooms" && (
            <>
              <h2>Recent Room Bookings</h2>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Room</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {stats?.recentRoomBookings?.map(item => (
                    <tr key={item._id}>
                      <td>{item.name}</td>
                      <td>{item.roomType}</td>
                      <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}

          {activeTab !== "rooms" && (
            <p className="coming-soon">Connect API to load data</p>
          )}
        </section>
      </main>
    </div>
  )
}

export default AdminDashboard
