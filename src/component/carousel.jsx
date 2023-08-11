import React from "react";
import men from "./men.jpg";
import women from "./women.jpg";
import kids from "./kids.jpg";

const Carousal = () => {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={men}
            className="d-block w-100 h-75vh carousel-img"
            alt=cd "..."
          />
        </div>
        <div className="carousel-item">
          <img
            src={women}
            className="d-block w-100 h-75vh carousel-img"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src={kids}
            className="d-block w-100 h-75vh carousel-img"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousal;
