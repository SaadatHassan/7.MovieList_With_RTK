import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions/actions";

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
  extraReducers: (builder) => {
    builder.addCase(reset, (state, action) => {
      state.splice(0, state.length);
    });
  },
});

export const { addMovie, removeMovie } = movieSlice.actions; //action is an object
export const movieReducer = movieSlice.reducer;
