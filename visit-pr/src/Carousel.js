import React from 'react';
import './App.css';

function Carousel() {
    return (
        <div className="Carousel">
<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://images.unsplash.com/photo-1556337074-c1a5a6559f12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1778&q=80" alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://images.unsplash.com/photo-1541168041333-64a2de0b8904?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2643&q=80" alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://images.unsplash.com/photo-1580237541049-2d715a09486e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1780&q=80" alt="Third slide" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
        </div>
    );
}

export default Carousel;
