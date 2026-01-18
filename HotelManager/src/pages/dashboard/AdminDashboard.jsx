// AdminDashboard.jsx
import { useEffect, useState } from "react";
import "./dashboard.css";

const AdminDashboard = () => {
  const [roomBookings, setRoomBookings] = useState([]);
  const [tableBookings, setTableBookings] = useState([]);
  const [eventBookings, setEventBookings] = useState([]);
  const [contactMessages, setContactMessages] = useState([]);

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 5;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAll();
  }, []);

  const fetchAll = async () => {
    setLoading(true);
    try {
      const [rRes, tRes, eRes, cRes] = await Promise.all([
        fetch("http://localhost:5000/api/rooms/bookings", { credentials: "include" }),
        fetch("http://localhost:5000/api/tables/bookings", { credentials: "include" }),
        fetch("http://localhost:5000/api/events/inquiries", { credentials: "include" }),
        fetch("http://localhost:5000/api/contact/admin", { credentials: "include" }),
      ]);

      const r = await rRes.json();
      const t = await tRes.json();
      const e = await eRes.json();
      const c = await cRes.json();

      setRoomBookings(r.data || []);
      setTableBookings(t.data || []);
      setEventBookings(e.data || []);
      setContactMessages(c.data || []);
    } catch (err) {
      console.error("Failed to load dashboard data", err);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (type, id, status) => {
    try {
      await fetch(`http://localhost:5000/api/admin/booking/${type}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ status }),
      });
      fetchAll();
    } catch (err) {
      console.error("Status update failed", err);
    }
  };

  const markContactRead = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/contact/admin/${id}/read`, {
        method: "PATCH",
        credentials: "include",
      });
      fetchAll();
    } catch (err) {
      console.error("Mark read failed", err);
    }
  };

  const filterByDate = (data) =>
    data.filter((item) => {
      const d = new Date(item.createdAt);
      if (fromDate && d < new Date(fromDate)) return false;
      if (toDate && d > new Date(toDate)) return false;
      return true;
    });

  const paginate = (data) => data.slice((page - 1) * pageSize, page * pageSize);

  const exportCSV = (data) => {
    if (!data.length) return;
    const headers = Object.keys(data[0]).join(",");
    const rows = data.map((obj) => Object.values(obj).join(","));
    const csv = [headers, ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${data[0]?.type || "data"}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const renderTable = (title, data, type, columns) => {
    const filtered = filterByDate(data);
    const paginated = paginate(filtered);
    const totalPages = Math.ceil(filtered.length / pageSize);

    return (
      <section className="admin-section">
        <div className="section-header">
          <h2>{title}</h2>
          <button className="btn-export" onClick={() => exportCSV(data)}>
            Export CSV
          </button>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                {columns.map((col) => (
                  <th key={col}>{col.toUpperCase()}</th>
                ))}
                <th>STATUS</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {paginated.map((item) => (
                <tr key={item._id}>
                  {columns.map((col) => (
                    <td key={col}>{item[col] ?? "-"}</td>
                  ))}
                  <td>
                    <span className={`badge badge-${item.status?.toLowerCase() || "pending"}`}>
                      {item.status || "pending"}
                    </span>
                  </td>
                  <td className="action-cell">
                    <button
                      className="btn btn-approve"
                      onClick={() => updateStatus(type, item._id, "approved")}
                      disabled={item.status === "approved"}
                    >
                      Approve
                    </button>
                    <button
                      className="btn btn-reject"
                      onClick={() => updateStatus(type, item._id, "rejected")}
                      disabled={item.status === "rejected"}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filtered.length > 0 && (
          <div className="pagination">
            <button
              className="btn-pagination"
              disabled={page === 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
            >
              Prev
            </button>
            <span>Page {page} of {totalPages || 1}</span>
            <button
              className="btn-pagination"
              disabled={page >= totalPages}
              onClick={() => setPage((p) => p + 1)}
            >
              Next
            </button>
          </div>
        )}
      </section>
    );
  };

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <h2>Aurora Admin</h2>
      </aside>

      <main className="admin-main">
        <h1>Admin Dashboard</h1>

        {/* <div className="filter-bar">
          <div className="date-group">
            <label>From</label>
            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
            />
          </div>
          <div className="date-group">
            <label>To</label>
            <input
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
            />
          </div>
          <button
            className="btn-clear"
            onClick={() => {
              setFromDate("");
              setToDate("");
              setPage(1);
            }}
          >
            Clear
          </button>
        </div> */}

        {loading ? (
          <div className="loading">Loading dashboard data...</div>
        ) : (
          <>
            {renderTable("Room Bookings", roomBookings, "room", [
              "name",
              "phone",
              "roomType",
              "guests",
            ])}

            {renderTable("Table Bookings", tableBookings, "table", [
              "name",
              "phone",
              "date",
              "time",
              "guests",
            ])}

            {renderTable("Event Inquiries", eventBookings, "event", [
              "name",
              "phone",
              "eventType",
              "eventDate",
              "guests",
              "message",
            ])}

            <section className="admin-section">
              <div className="section-header">
                <h2>Contact Messages</h2>
              </div>
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>NAME</th>
                      <th>EMAIL</th>
                      <th>PHONE</th>
                      <th>MESSAGE</th>
                      <th>STATUS</th>
                      <th>ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginate(filterByDate(contactMessages)).map((msg) => (
                      <tr key={msg._id}>
                        <td>{msg.name}</td>
                        <td>{msg.email}</td>
                        <td>{msg.phone || "-"}</td>
                        <td className="message-cell">{msg.message}</td>
                        <td>
                          <span className={`badge badge-${msg.status?.toLowerCase() || "new"}`}>
                            {msg.status || "new"}
                          </span>
                        </td>
                        <td>
                          {msg.status === "new" && (
                            <button
                              className="btn btn-read"
                              onClick={() => markContactRead(msg._id)}
                            >
                              Mark as Read
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;