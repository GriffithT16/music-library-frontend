import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import DisplaySongs from './Components/DisplaySongs/DisplaySongs';
import AddNewSongForm from './Components/AddNewSongForm/AddNewSongForm';
import SearchBar from './Components/SearchBar/SearchBar';

function App() {
  
  const [songs, setSongs] = useState([]);

  function addNewSong(entry){

    let tempSongs = [entry, songs];
    setSongs(tempSongs);
  }

  useEffect(() => {
    fetchSongs();
  }, []);

  const fetchSongs = async () => {

    let response = await axios.get("http://127.0.0.1:8000/api/songs/");
    console.log(response.data)
    debugger;
    setSongs(response.data);
  }
  return (
    <div>
      <div className='border-box'>
        <DisplaySongs parentEntries={songs}/>
        <SearchBar />
      </div>
      <div className='border-box'>
        <AddNewSongForm addNewSong={addNewSong}/>
      </div>
      <div>
        
      </div>     
    </div>
  );
}

export default App;
