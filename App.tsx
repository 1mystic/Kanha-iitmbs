import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Pride from './pages/Pride';
import Achievements from './pages/Achievements';
import Bulletin from './pages/Bulletin';
import Creatives from './pages/Creatives';
import Library from './pages/Library';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col relative">
        <div className="fixed inset-0 pointer-events-none z-0 opacity-60 mix-blend-multiply dark:mix-blend-overlay bg-paper-texture"></div>
        
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pride" element={<Pride />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/bulletin" element={<Bulletin />} />
            <Route path="/creatives" element={<Creatives />} />
            <Route path="/library" element={<Library />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;