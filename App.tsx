import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Management from './components/Management';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-gray-800 scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Management />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;