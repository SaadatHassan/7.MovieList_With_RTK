import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createRandomSong } from "../data";
import { addSong, removeSong } from "../store";
import { store } from "../store";

export const SongList = () => {
  const dispatch = useDispatch();

  const songList = useSelector((state) => state.songs); //this state is the whole state object

  const handleAddSong = (song) => {
    // const action = addSong(song);
    // dispatch(action);
    dispatch(addSong(song)); //argument to addSong is payload

    console.log(JSON.stringify(store.getState()));
  };

  const handleRemoveSong = (song) => {
    dispatch(removeSong(song));
  };

  const renderedSongs = songList.map((song, index) => {
    return (
      <li key={song}>
        {song}
        <button onClick={() => handleRemoveSong(song)}>X</button>
      </li>
    );
  });
  return (
    <div>
      <div>
        <h3>Songs List</h3>
        <div>
          <button onClick={() => handleAddSong(createRandomSong())}>
            Add Song to the list
          </button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  );
};
