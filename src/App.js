import {Header, About, Work, Contact, Footer, MobileNav} from './components/index';
import { useState, Suspense, lazy } from 'react';
import './App.css';

function App() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="App">
      <Header isOpen={isOpen} setOpen={setOpen}/>
      <MobileNav isOpen={isOpen} setOpen={setOpen} />
      <About />
      {/*<Suspense fallback = {<div>Loading...</div>}>*/}
        <Work />
      {/*</Suspense>*/}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
