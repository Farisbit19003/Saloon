import React from 'react';
import Header from './components/Header';
import HeroText from './components/HeroText';
import About from './components/About';
import { HairStyle } from './components/HairStyle';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Header />
      <HeroText/>
      <About/>
      <HairStyle/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
