import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import "./layout.css"
const Adminlayout = () => {
  return (
    <>
      <div className="admin-layout">
        <Sidebar />
        <main className="admin-main">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Adminlayout;
