import React from "react";
import { createRandomMovie } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, removeMovie } from "../store";
import { store } from "../store";

export const MovieList = () => {
  const dispatch = useDispatch();

  const movieList = useSelector((state) => state.movies); //this state is the whole state object

  const handleAddMovie = (movie) => {
    dispatch(addMovie(movie));
  };

  const handleMovieRemove = (movie) => {
    dispatch(removeMovie(movie));
  };

  const renderedMovies = movieList.map((movie, index) => {
    return (
      <li key={movie}>
        {movie}
        <button className="bg-red-500" onClick={() => handleMovieRemove(movie)}>
          X
        </button>
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
