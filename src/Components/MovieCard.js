import React from "react";
import "./MovieCard.css";

function MovieCard() {
  return (
    <>
      <div className="content-row">
        <div className="content-container">
          <div className="poster-container">
            <img
              className="poster-img"
              src="/images/fighter.jpg"
              alt="poster"
            />
            <span>Fighter</span>
          </div>
          <div className="poster-container">
            <img
              className="poster-img"
              src="/images/shaitaan.jpg"
              alt="poster"
            />
            <span>Shaitaan</span>
          </div>
          <div className="poster-container">
            <img
              className="poster-img"
              src="/images/Jai-Hanuman.jpeg"
              alt="poster"
            />
            <span>Hanu-Man</span>
          </div>

          <div className="poster-container">
            <img
              className="poster-img"
              src="/images/Hero-Heeroine.jpg"
              alt="poster"
            />
            <span>Hero-Heroine</span>
          </div>
          <div className="poster-container">
            <img
              className="poster-img"
              src="/images/12th fail.jpg"
              alt="poster"
            />
            <span>12th Fail</span>
          </div>
          <div className="poster-container">
            <img
              className="poster-img"
              src="/images/fighter.jpg"
              alt="poster"
            />
            <span>Fighter</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieCard;
