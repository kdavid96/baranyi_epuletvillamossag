import './App.css';

import {About, Contact, Footer, Header, MobileNav, Work, FloatingHamburger, Popup} from './components/index';

import { useState } from 'react';

function App() {
  const [isOpen, setOpen] = useState(false);
  const [isOpenPopup, setOpenPopup] = useState(true);
  return (
    <div className="App">
      <Header isOpen={isOpen} setOpen={setOpen}/>
      <MobileNav isOpen={isOpen} setOpen={setOpen} />
      <FloatingHamburger isOpen={isOpen} setOpen={setOpen} />
      <Popup isOpenPopup={isOpenPopup} setOpenPopup={setOpenPopup}/>
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
