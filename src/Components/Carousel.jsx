import React from 'react';

const Carousel = () => {
  return (
    <header className="container-fluid p-0">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="img/C1.jpg"
              className="d-block w-100"
              alt="Mujer de vestido blanco y lentes de sol, sonriendo"
            />
          </div>
          <div className="carousel-item">
            <img
              src="img/C2.jpg"
              className="d-block w-100"
              alt="Mujer con lentes de sol y vestido color salmon, sonriendo"
            />
          </div>
          <div className="carousel-item">
            <img
              src="img/C3.jpg"
              className="d-block w-100"
              alt="Mujer de vestido blanco, sonriendo "
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </header>
  )
};

export default Carousel;
