import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AdminRoute from "./components/AdminRoute";
// import AdminDashboard from "./pages/dashboard/AdminDashboard";
// import AdminLogin from "./pages/login/AdminLogin";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
