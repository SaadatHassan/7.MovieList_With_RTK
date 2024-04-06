import React from "react";
import { createRandomSong } from "../data";

export const SongList = () => {
  const songList = [];

  const handleAddSong = (song) => {};

  const handleRemoveSong = (song) => {};

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
