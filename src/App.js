import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [songs, setSongs] = useState([]);

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
      Hello World
    </div>
  );
}

export default App;
