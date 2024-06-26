import React from "react";
import "./MovieCard.css";
// import { Link } from "react-router-dom";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const MovieCard = (props) => {
  return (
    <div className="content-row">
      <div className="content-container">
        {props.movie.slice(0, 18).map((movie_data, index) => {
          if (movie_data.poster_path !== null) {
            return (
              <div key={index} className="poster-container">
                <img
                  className="poster-img"
                  src={IMGPATH + movie_data.poster_path}
                  alt="poster"
                />
                <span>{movie_data.title}</span>
                <h3 className="origin_lang">{movie_data.release_date}</h3>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default MovieCard;
