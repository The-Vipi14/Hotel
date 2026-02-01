import { useEffect, useState } from "react";
import "./tables.css";

const TableBookings = () => {
  const [allTables, setAllTables] = useState([]);
  const [todayTables, setTodayTables] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTableBookings = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/admin/tables", {
          credentials: "include",
        });
        const data = await res.json();

        setAllTables(data.TableBookings || []);
        setTodayTables(data.todayTableBookings || []);
      } catch (error) {
        console.error("Failed to fetch table bookings");
      } finally {
        setLoading(false);
      }
    };

    fetchTableBookings();
  }, []);

  if (loading) return <h3>Loading table bookings...</h3>;

  const renderTable = (tables) => (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Date</th>
            <th>Time</th>
            <th>Guests</th>
          </tr>
        </thead>

        <tbody>
          {tables.length === 0 ? (
            <tr>
              <td colSpan="5">No reservations found</td>
            </tr>
          ) : (
            tables.map((table) => (
              <tr key={table._id}>
                <td>{table.name}</td>
                <td>{table.phone}</td>
                <td>{new Date(table.date).toLocaleDateString()}</td>
                <td>{table.time}</td>
                <td>{table.guests}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="tables-page">
      <h2>Today’s Table Reservations</h2>
      {renderTable(todayTables)}

      <h2 style={{ marginTop: "40px" }}>All Table Reservations</h2>
      {renderTable(allTables)}
    </div>
  );
};

export default TableBookings;
