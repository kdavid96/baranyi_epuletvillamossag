import {Header, About, Work, Contact, Footer, MobileNav} from './components/index';
import { useState } from 'react';
import './App.css';
import ScrollUp from './components/ScrollUp';

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
