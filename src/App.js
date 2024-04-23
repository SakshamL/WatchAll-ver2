import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import HeroSlider from "./Components/HeroSlider";
import RowHeading from "./Components/RowHeading";
import MovieCard from "./Components/MovieCard";
import TVCard from "./Components/TVCard";
import movies_api from "./APIURL";

function App() {
  const [movies, setmovies] = useState([]);
  const [tv_shows, setTV_shows] = useState([]);

  useEffect(() => {
    getMovies();
    getTV_Shows();
  }, []);

  const getMovies = async () => {
    const response = await fetch(movies_api.movies);
    const responseJSON = await response.json();
    // console.log(responseJSON.results);

    const sortedarray = responseJSON.results.sort((a, b) => {
      const dateA = new Date(a.release_date);
      const dateB = new Date(b.release_date);
      if (dateA > dateB) {
        return -1;
      }
      return true;
    });
    // for (let i = 0; i < sortedarray.length; i++) {
    //   console.log(sortedarray[i].title);
    //   console.log(sortedarray[i].release_date);
    // }
    setmovies(sortedarray);
  };

  const getTV_Shows = async () => {
    const response = await fetch(movies_api.tv_shows);
    const responseJSON = await response.json();
    // console.log(responseJSON.results);

    // const sortedarray = responseJSON.results.sort((a, b) => {
    //   const dateA = new Date(a.first_air_date);
    //   const dateB = new Date(b.first_air_date);
    //   if (dateA < dateB) {
    //     return -1;
    //   }
    //   return true;
    // });
    // for (let i = 0; i < sortedarray.length; i++) {
    //   console.log(sortedarray[i].title);
    //   console.log(sortedarray[i].release_date);
    // }

    setTV_shows(responseJSON.results);
  };

  return (
    <div className="App">
      <div className="app-body">
        <Header />
        <HeroSlider />
        <RowHeading title="Latest & Upcoming Movies" />
        <MovieCard movie={movies} />

        <br></br>
        <br></br>

        <RowHeading title="Latest TV Series and Shows" />
        <TVCard tv={tv_shows} />

        <br></br>
        <br></br>
        <br></br>
        <div>adad</div>
      </div>
    </div>
  );
}

export default App;
