import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import logo from "../../assets/logo.png"
import "./sidebar.css";

const Sidebar = () => {
  const [admin, setAdmin] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAdminProfile();
  }, []);

  const fetchAdminProfile = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/admin/profile",
        { withCredentials: true }
      );

      if (res.data.adminDetails) {
        setAdmin(res.data.adminDetails);
      }
    } catch (error) {
      console.error("Failed to fetch admin profile");
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/admin/logout",
        {},
        { withCredentials: true }
      );

      navigate("/login");
    } catch (error) {
      console.error("Logout failed");
    }
  };

  return (
    <aside className="admin-sidebar">
      {/* ===== HEADER ===== */}
      <div className="sidebar-header">
        <div className="logo-wrapper">
          <img src={logo} alt="Hotel Ananda Logo" />
        </div>

        <div className="sidebar-title">
          <h2>Ananda</h2>
          <span className="sidebar-subtitle">Admin Panel</span>
        </div>
      </div>

      {/* ===== NAVIGATION ===== */}
      <nav className="sidebar-nav">
        <NavLink to="/" end className="nav-item">
          Dashboard
        </NavLink>
        <NavLink to="rooms" className="nav-item">
          Room Bookings
        </NavLink>
        <NavLink to="tables" className="nav-item">
          Table Reservations
        </NavLink>
        <NavLink to="events" className="nav-item">
          Banquet & Events
        </NavLink>
        <NavLink to="messages" className="nav-item">
          Contact Messages
        </NavLink>
      </nav>

      {/* ===== FOOTER ===== */}
      {admin && (
        <div className="sidebar-footer">
          <div className="admin-info">
            <p className="admin-name">{admin.name}</p>
            <p className="admin-email">{admin.email}</p>
          </div>

          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
