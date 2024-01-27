import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import HeroSlider from "./Components/HeroSlider";
import RowHeading from "./Components/RowHeading";
import MovieCard from "./Components/MovieCard";
import movies_api from "./APIURL";

function App() {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const response = await fetch(movies_api);
    const responseJSON = await response.json();
    // console.log(responseJSON.results);

    setmovies(responseJSON.results);
  };

  return (
    <div className="App">
      <div className="app-body">
        <Header />
        <HeroSlider />
        <RowHeading title="Latest & Upcoming Movies" />
        <MovieCard movie={movies} />

        <RowHeading title="Latest TV Shows" />
        <MovieCard movie={movies} />

        <br></br>
        <br></br>
        <br></br>
        <div>adad</div>
      </div>
    </div>
  );
}

export default App;
