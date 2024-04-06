import { configureStore, createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    // 'movie' + '/' 'addMovie' = movie/addMovie --> this is the action type which is done by redux
    addMovie: (state, action) => {
      state.push(action.payload);
    },
    removeMovie: (state, action) => {
      //state is the array of movies
      //action.payload is the string that we want to remove from the array
      state.splice(state.indexOf(action.payload), 1);
    },
  },
});

const songSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    // 'song' + '/' 'addSong' = song/addSong --> this is the action type which is done by redux
    addSong: (state, action) => {
      state.push(action.payload);
    },
    removeSong: (state, action) => {
      //state is the array of songs
      //action.payload is the string that we want to remove from the array
      state.splice(state.indexOf(action.payload), 1);
    },
  },
});

export const store = configureStore({
  reducer: {
    songs: songSlice.reducer,
    movies: movieSlice.reducer,
  },
});

export const { addSong, removeSong } = songSlice.actions;
export const { addMovie, removeMovie } = movieSlice.actions;

// console.log(store);
console.log(JSON.stringify(store.getState()));
