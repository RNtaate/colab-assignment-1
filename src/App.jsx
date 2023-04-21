import './styles/App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Extra from './Pages/Extra'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/extra" element={<Extra />} />
    </Routes>
  )
}

export default App
