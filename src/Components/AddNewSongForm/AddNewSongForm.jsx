import React, { useState } from 'react';


const AddNewSongForm = (props) => {

    const [title, setTitle] = useState(0);
    const [artist, setArtist] = useState(0);
    const [album, setAlbum] = useState(0);
    const [release_date, setReleaseDate] = useState(0);
    const [genre, setGenre] = useState(0);

    function handleSubmit(event) {
        event.preventDefault();
        let newSong = {
            title: title,
            artist: artist,
            album: album,
            release_date: release_date,
            genre: genre
        };
        console.log(newSong)
        props.addNewSong(newSong)
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
                <input type='text' value={release_date} onChange={(event) => setReleaseDate(event.target.value)} />
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