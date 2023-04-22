import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Extra from './Pages/Extra';
import NavBar from './components/NavBar';

function App() {
  return (
    <main>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/extra" element={<Extra />} />
      </Routes>
    </main>
  );
}

export default App;
