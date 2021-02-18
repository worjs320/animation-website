import React, { useState } from 'react';
import Dropdown from './components/Dropdown';
import Hero from './components/Hero';
import {
  InfoSection,
  InfoSectionTwo,
  InfoSectionThree,
} from './components/InfoSection';
import Navbar from './components/Navbar';
import { SliderData } from './data/SliderData';
import GlobalStyle from './globalStyles';
import { InfoData, InfoDataTwo, InfoDataThree } from './data/InfoData';
import Footer from './components/Footer';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
      <InfoSectionTwo {...InfoDataTwo} />
      <InfoSectionThree {...InfoDataThree} />
      <Footer />
    </>
  );
}

export default App;
