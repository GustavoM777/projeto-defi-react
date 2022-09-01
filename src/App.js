import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Developer from './components/Developer/Developer';
import Subscribe from './components/Subscribe/Subscribe';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Developer />
      <Subscribe />
    </div>
  );
}

export default App;
