import React from 'react';

import Header from '../header/Header';
import Home from '../home/Home';
import Services from '../services/Services';
import Portfolio from '../portfolio/Portfolio';
import Footer from '../footer/Footer';

import './App.css';
import { AboutMe } from '../about-me/AboutMe';

const App: React.FC = () => (
  <>
    <div className="container-header">
      <Header />
    </div>
    <Home />
    <Services />
    <Portfolio />
    <AboutMe />
    <Footer />
  </>
);

export default App;
