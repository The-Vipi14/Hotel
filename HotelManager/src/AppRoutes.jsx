import { Routes, Route } from "react-router-dom";
import AdminLogin from "./pages/login/AdminLogin";
import Adminlayout from "./layout/AdminLayout/Adminlayout";
import RoomBookings from "./pages/roomBooking/RoomBookings";
import EventBooking from "./pages/EventBooking.jsx/EventBooking";
import TableBookings from "./pages/tablesBooking/TableBookings";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import ContactMessages from "./pages/ContactMessages/ContactMessages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<AdminLogin />} />
      <Route path="/" element={<Adminlayout />}>
        <Route path="" element={<AdminDashboard />} />
        <Route path="rooms" element={<RoomBookings />} />
        <Route path="events" element={<EventBooking />} />
        <Route path="tables" element={<TableBookings />} />
        <Route path="messages" element={<ContactMessages/>} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
