import { NavLink } from "react-router-dom";
import "./sidebar.css";
const Sidebar = () => {
  return (
    <>
      <aside className="admin-sidebar">
        <div className="sidebar-header">
          <h2>Aurora</h2>
          <span className="sidebar-subtitle">Admin Panel</span>
        </div>

        <nav className="sidebar-nav">
          <NavLink to="/" className="nav-item">
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
          <NavLink to="contacts" className="nav-item">
            Contact Messages
          </NavLink>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
