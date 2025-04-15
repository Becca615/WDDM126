import React from 'react';
import './App.css'; 
import Header from './Header';
import About from './About';
import Portfolio from './Portfolio';
import Services from './Services';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Portfolio />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;