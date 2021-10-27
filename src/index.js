import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "typeface-roboto";

import App from './App';
import { ParallaxProvider } from 'react-scroll-parallax';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <React.StrictMode>
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
