import './App.css';

import {About, Contact, Footer, Header, MobileNav, Work} from './components/index';

import { useState } from 'react';

function App() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="App">
      <Header isOpen={isOpen} setOpen={setOpen}/>
      <MobileNav isOpen={isOpen} setOpen={setOpen} />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
