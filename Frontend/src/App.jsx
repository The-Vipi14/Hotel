import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/loading/Loading";

const Navbar = lazy(() => import("./components/Navbar/Navbar"));
const Footer = lazy(() => import("./components/footer/Footer"));

const Home = lazy(() => import("./pages/Home/Home"));
const Banquet = lazy(() => import("./pages/banquet/Banquet"));
const Contact = lazy(() => import("./pages/contact/Context"));
const Gallery = lazy(() => import("./pages/gallery/Gallery"));
const Restaurant = lazy(() => import("./pages/Restaurant/Restaurant"));
const Rooms = lazy(() => import("./pages/rooms/Rooms"));
const Reservation = lazy(() => import("./pages/reservation/Reservation"));

function App() {
  return (
    <div className="app">
      <Suspense fallback={<Loading/>}>
        <Navbar />

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/banquet" element={<Banquet />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reservation" element={<Reservation />} />
          </Routes>
        </main>

        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
