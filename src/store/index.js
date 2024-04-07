import { configureStore } from "@reduxjs/toolkit";
import { movieReducer, addMovie, removeMovie } from "./slices/movieSlice";
import { songReducer, addSong, removeSong } from "./slices/songSlice";
import { reset } from "./actions/actions";

export const store = configureStore({
  reducer: {
    movies: movieReducer,
    songs: songReducer,
  },
});

export { addMovie, removeMovie, addSong, removeSong, reset };

// console.log(store);
console.log(JSON.stringify(store.getState()));
