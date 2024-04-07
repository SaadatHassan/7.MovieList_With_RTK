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
      <li
        className="p-4 m-0 flex flex-row justify-between items-center uppercase border border-gray-100"
        key={song}
      >
        {song}
        <button
          className="bg-red-400 p-1 ml-2"
          onClick={() => handleRemoveSong(song)}
        >
          X
        </button>
      </li>
    );
  });
  return (
    <div className="p-2">
      <div>
        <h3 className="text-3xl font-bold">Songs List</h3>
        <div className="p-1">
          <button
            className="rounded-full p-1 bg-blue-500 text-white"
            onClick={() => handleAddSong(createRandomSong())}
          >
            Add Song to the list
          </button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  );
};
