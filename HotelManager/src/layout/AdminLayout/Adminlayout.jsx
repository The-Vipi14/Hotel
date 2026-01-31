import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";

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
