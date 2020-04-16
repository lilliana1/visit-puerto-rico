import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Nav from './Nav';
import Carousel from './Carousel';

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <Carousel />
  </React.StrictMode>,
  document.getElementById('root')
);

