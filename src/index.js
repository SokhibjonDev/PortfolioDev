import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Service from './components/servise/Service';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <div className="container">
      <Header />
      <About />
      <Experience />
      <Service />
      <Portfolio />
      <Contact />
    </div>
    <Footer />
  </React.StrictMode >
);

