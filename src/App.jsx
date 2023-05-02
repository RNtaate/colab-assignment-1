import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from './Pages/Home';
import About from './Pages/About';
import Extra from './Pages/Extra';
import NavBar from './components/NavBar';

import ScrollToTop from './components/ScrollToTop';

function App() {
  const location = useLocation();

  return (
    <main>
      <NavBar />
      <AnimatePresence
        mode="wait"
        onExitComplete={() => {
          if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0 });
          }
        }}
      >
        {/* <ScrollToTop> */}
        <Routes location={location} key={location.key}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/extra" element={<Extra />} />
        </Routes>
        {/* </ScrollToTop> */}
      </AnimatePresence>
    </main>
  );
}

export default App;
