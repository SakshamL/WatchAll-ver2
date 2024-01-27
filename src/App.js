import React from "react";
import "./App.css";
import Header from "./Components/Header";
import HeroSlider from "./Components/HeroSlider";
import RowHeading from "./Components/RowHeading";
import MovieCard from "./Components/MovieCard";

function App() {
  return (
    <div className="App">
      <div className="app-body">
        <Header />
        <HeroSlider />
        <RowHeading title="Latest Movies" />
        <MovieCard />

        <RowHeading title="Latest TV Shows" />
        <MovieCard />

        <br></br>
        <br></br>
        <br></br>
        <div>adad</div>
      </div>
    </div>
  );
}

export default App;
