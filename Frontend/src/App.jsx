import "./App.css";
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
      <Home />
      <Rooms />
      <Restaurant />
      <Banquet />
      <Gallery />
      <Contact />
    </>
  );
}

export default App;
