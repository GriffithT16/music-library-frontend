import React, { useState } from "react";

const SearchBar = (props) => {
  const [songSearched, setSongSearched] = useState("");

  function handleSubmit(formEvent) {
    formEvent.preventDefault();
    // debugger;
    console.log(songSearched);

    let songFound;
    songFound = props.songs.filter(function (el) {
      if (el.title.includes(songSearched) || el.genre.includes(songSearched) || el.album.includes(songSearched) || el.artist.includes(songSearched)) {
        return true;
      }
    });
    
    props.setSongs(songFound);
    // debugger;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Search for Song</label>
      <input
        type="text"
        onChange={(event) => setSongSearched(event.target.value)}
        value={songSearched}
      />
      <button type="submit">Search Songs Library</button>
    </form>
  );
};

export default SearchBar;
