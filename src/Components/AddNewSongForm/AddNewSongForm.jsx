import React, { useState } from 'react';
import axios from 'axios';
import DisplaySongs from '../DisplaySongs/DisplaySongs';


const AddNewSongForm = (props) => {

    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [album, setAlbum] = useState('');
    const [release_date, setReleaseDate] = useState('');
    const [genre, setGenre] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        let newSong = {
            title: title,
            artist: artist,
            album: album,
            release_date: release_date,
            genre: genre
        };
        // debugger;
        console.log(newSong)
        let response = await axios.post('http://127.0.0.1:8000/api/songs/', newSong);
        if(response.status === 201){
            return true;
        }
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input type='text' value={title} onChange={(event) => setTitle(event.target.value)} />
            </div>
            <div>
                <label>Artist</label>
                <input type='text' value={artist} onChange={(event) => setArtist(event.target.value)} />
            </div>
            <div>
                <label>Album</label>
                <input type='text' value={album} onChange={(event) => setAlbum(event.target.value)} />
            </div>
            <div>
                <label>Release Date</label>
                <input type='date' value={release_date} onChange={(event) => setReleaseDate(event.target.value)} />
            </div>
            <div>
                <label>Genre</label>
                <input type='text' value={genre} onChange={(event) => setGenre(event.target.value)} />
            </div>
            <button type='submit' className='btn btn-primary'>Add Song</button>
        </form>

     );
}
 
export default AddNewSongForm;
