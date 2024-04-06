import React from "react";
import { createRandomMovie } from "../data";

export const MovieList = () => {
  const movieList = [];

  const handleAddMovie = (movie) => {};

  const handleMovieRemove = (movie) => {};

  const renderedMovies = movieList.map((movie, index) => {
    return (
      <li key={movie}>
        {movie}
        <button onClick={() => handleMovieRemove(movie)}>X</button>
      </li>
    );
  });

  return (
    <div>
      <div>
        <h3>Movies List</h3>
        <div>
          <button onClick={() => handleAddMovie(createRandomMovie())}>
            Add Movie to the list
          </button>
        </div>
      </div>
      <ul>{renderedMovies}</ul>
    </div>
  );
};
