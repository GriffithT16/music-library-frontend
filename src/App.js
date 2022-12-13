import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import DisplaySongs from './Components/DisplaySongs/DisplaySongs';
import AddNewSongForm from './Components/AddNewSongForm/AddNewSongForm';

function App() {
  
  const [songs, setSongs] = useState([]);

  function addNewSong(entry){

    let tempSongs = [entry];
    setSongs(tempSongs);
  }

  useEffect(() => {
    fetchSongs();
  }, []);

  const fetchSongs = async () => {

    let response = await axios.get("http://127.0.0.1:8000/api/songs/");
    console.log(response.songs)
    debugger;
    setSongs(response.songs);
  }
  return (
    <div>
      <DisplaySongs parentEntries={songs}/>
      <AddNewSongForm addNewSong={addNewSong}/>
    </div>
  );
}

export default App;
