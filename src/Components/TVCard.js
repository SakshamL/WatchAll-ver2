import React from "react";
import "./TVCard.css";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const TVCard = (props) => {
  return (
    <div className="content-row">
      <div className="content-container">
        {props.tv.slice(0, 18).map((tv_data, index) => {
          if (tv_data.poster_path !== null) {
            return (
              <div key={index} className="poster-container">
                <img
                  className="poster-img"
                  src={IMGPATH + tv_data.poster_path}
                  alt="poster"
                />
                <span>{tv_data.name}</span>
                <h3 className="origin_lang">{tv_data.first_air_date}</h3>
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

export default TVCard;
