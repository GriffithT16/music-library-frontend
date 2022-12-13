import React, { useState } from 'react';


const SearchBar = (props) => {

    const [songSearched, setSongSearched] = useState('')

    function handleSubmit(formEvent){
        formEvent.preventDefault();
        console.log(songSearched)
    }   
        return ( 
            <form onSubmit={handleSubmit}>
                <label>Search for Song</label>
                <input type='text' onChange={(event) => setSongSearched(event.target.value)} value={songSearched}/>
                <button type='submit'>Search Songs</button>
            </form>
            
     );
}
 
export default SearchBar;
