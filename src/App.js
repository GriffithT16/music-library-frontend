import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import DisplaySongs from './Components/DisplaySongs/DisplaySongs';
import AddNewSongForm from './Components/AddNewSongForm/AddNewSongForm';
import SearchBar from './Components/SearchBar/SearchBar';
import NavBar from './Components/NavBar/NavBar';


function App() {
  
  const [songs, setSongs] = useState([]);

  function addNewSong(entry){

    // let tempSongs = [entry, songs];
    // setSongs(tempSongs);
  }

  useEffect(() => {
    fetchSongs();
  }, []);

  const fetchSongs = async () => {

    let response = await axios.get("http://127.0.0.1:8000/api/songs/");
    console.log(response.data)
    // debugger;
    setSongs(response.data);
  }

  // function search(songSearched)
  //   debugger;
  //   console.log(songSearched)

  return (
    <div className='background-img'>
      <NavBar />
      <div className='border-box'>
        <DisplaySongs songs={songs}/>        
      </div>
      <div className='border-box'>
        <AddNewSongForm addNewSong={addNewSong}/>
      </div>
        <SearchBar songs={songs} setSongs={setSongs}/>
      <div>
        
      </div>     
    </div>
  );
}

export default App;
