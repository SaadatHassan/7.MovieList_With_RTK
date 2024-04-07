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
      <li
        className="p-4 m-0 flex flex-row justify-between items-center uppercase border border-gray-100"
        key={movie}
      >
        {movie}
        <button
          className="bg-red-400 p-1 ml-2"
          onClick={() => handleMovieRemove(movie)}
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div>
      <div className="p-2">
        <h3 className="text-3xl font-bold">Movies List</h3>
        <div className="p-1">
          <button
            className="rounded-full p-1 bg-blue-500 text-white"
            onClick={() => handleAddMovie(createRandomMovie())}
          >
            Add Movie to the list
          </button>
        </div>
      </div>
      <ul className="">{renderedMovies}</ul>
    </div>
  );
};
