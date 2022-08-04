import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <div className="container">
      <Header />
    </div>
  </React.StrictMode >
);

