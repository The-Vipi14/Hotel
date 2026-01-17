import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banquet from './pages/banquet/Banquet'
import Gallery from './pages/gallery/Gallery'
import Home from './pages/Home/Home'
import Restaurant from './pages/Restaurant/Restaurant'
import Rooms from './pages/rooms/Rooms'

function App() {

  return (
  <>
  <Navbar/>
  <Home/>
  <Rooms/>
  <Restaurant/>
  <Banquet/>
  <Gallery/>
  </>
  )
}

export default App
