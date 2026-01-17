import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Banquet from "./pages/banquet/Banquet";
import Contact from "./pages/contact/Context";
import Gallery from "./pages/gallery/Gallery";
import Home from "./pages/Home/Home";
import Restaurant from "./pages/Restaurant/Restaurant";
import Rooms from "./pages/rooms/Rooms";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/banquet" element={<Banquet />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/cantact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
