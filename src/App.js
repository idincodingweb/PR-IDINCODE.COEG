import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="bg-dark ">
      <Navbar />
      <Container fluid>
        <Hero />
        <About />
        <Portfolio />
        <Skills />
        <Testimonials />
        <Contact />
        <Footer />
      </Container>
    </div>
  );
}

export default App;
