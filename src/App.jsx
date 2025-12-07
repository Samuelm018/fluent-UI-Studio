import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Components from './pages/Components';
import Colors from './pages/Colors';
import ColorExplorer from './pages/ColorExplorer';
import Contact from './pages/Contact';
import Developer from './pages/Developer';
import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<Components />} />
        <Route path="/colors" element={<Colors />} />
        <Route path="/color-explorer" element={<ColorExplorer />} />
        <Route path="/developer" element={<Developer />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20 px-4 max-w-7xl mx-auto w-full">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
