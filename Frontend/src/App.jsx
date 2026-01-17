import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banquet from './pages/banquet/Banquet'
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
  </>
  )
}

export default App
