import React from 'react';
import { BarChart3, Brain, Globe2, ArrowRight, ChevronDown } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Solutions from './components/Solutions';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <Solutions />
      <Footer />
    </div>
  );
}

export default App;