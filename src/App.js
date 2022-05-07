import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [moviesList, setMoviesList] = useState([]);

  async function fetchMoviesHandler() {
    const fetchMovieResponse = await fetch("https://swapi.dev/api/films/");
    const moviesResponse = await fetchMovieResponse.json();

    console.log(moviesResponse);
    const transformedMoviesList = moviesResponse.results.map((movie) => {
      return {
        title: movie.title,
        releaseDate: movie.release_date,
        openingText: movie.opening_crawl,
      };
    });

    setMoviesList(transformedMoviesList);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={moviesList} />
      </section>
    </React.Fragment>
  );
}

export default App;
