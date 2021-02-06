import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { SliderData } from './components/SliderData';
import GlobalStyle from './globalStyles';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Hero slides={SliderData} />
    </>
  );
}

export default App;
