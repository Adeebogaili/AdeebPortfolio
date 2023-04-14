import React from 'react';

// components
import Header from '../Header/Header';
import Home from '../Home/Home';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
// import Routers from '../../router/Routers'
// import Footer from './../Footer/Footer'

const Layout = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default Layout;
