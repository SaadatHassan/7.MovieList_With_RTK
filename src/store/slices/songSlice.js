import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions/actions";

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
  extraReducers: (builder) => {
    builder.addCase(reset, (state, action) => {
      state.splice(0, state.length);
    });
    // builder.addCase(movieSlice.actions.reset, (state, action) => {
    //   state.splice(0, state.length);
    // });
  },
});

export const { addSong, removeSong } = songSlice.actions;
export const songReducer = songSlice.reducer;
