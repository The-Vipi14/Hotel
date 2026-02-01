import { useEffect, useState } from "react";
import './tables.css'
const TableBookings = () => {
  const [tables, setTables] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTableBookings = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/admin/tables", {
          credentials: "include",
        });
        const data = await res.json();
        setTables(data.TableBookings || []);
      } catch (error) {
        console.error("Failed to fetch table bookings");
      } finally {
        setLoading(false);
      }
    };

    fetchTableBookings();
  }, []);

  if (loading) return <h3>Loading table bookings...</h3>;

  return (
    <div className="tables-page">
      <h2>Table Reservations</h2>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Date</th>
              <th>Time</th>
              <th>Guests</th>
              {/* <th>Status</th> */}
            </tr>
          </thead>

          <tbody>
            {tables.length === 0 ? (
              <tr>
                <td colSpan="6">No reservations found</td>
              </tr>
            ) : (
              tables.map(table => (
                <tr key={table._id}>
                  <td>{table.name}</td>
                  <td>{table.phone}</td>
                  <td>{new Date(table.date).toLocaleDateString()}</td>
                  <td>{table.time}</td>
                  <td>{table.guests}</td>
                  {/* <td>
                    <span className={`status ${table.status}`}>
                      {table.status}
                    </span>
                  </td> */}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableBookings;
