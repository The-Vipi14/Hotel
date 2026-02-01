import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import AdminHeader from "../../components/header/AdminHeader";
import "./layout.css";

const Adminlayout = () => {
  return (
    <div className="admin-layout">
      <Sidebar />

      <div className="admin-main">
       
        <AdminHeader />

       
        <div className="admin-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Adminlayout;
