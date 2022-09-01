import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/About/About';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
