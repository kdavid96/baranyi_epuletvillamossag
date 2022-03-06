import './App.css';

import {About, Contact, Footer, Header, MobileNav, Work, floatingHamburger, Popup} from './components/index';

import { useState } from 'react';

function App() {
  const [isOpen, setOpen] = useState(false);
  const [isOpenPopup, setOpenPopup] = useState(true);
  const [isScrolled, setScrolled] = useState(false);
  return (
    <div className="App">
      <Header isOpen={isOpen} setOpen={setOpen} isScrolled={isScrolled} setScrolled={setScrolled}/>
      <MobileNav isOpen={isOpen} setOpen={setOpen} />
      {/*<FloatingHamburger isOpen={isOpen} setOpen={setOpen} />*/}
      <Popup isOpenPopup={isOpenPopup} setOpenPopup={setOpenPopup}/>
      <About isScrolled={isScrolled} setScrolled={setScrolled}/>
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
