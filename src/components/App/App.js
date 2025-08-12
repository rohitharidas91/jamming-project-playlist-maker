import React from 'react';
import { useState } from "react";
import styles from './App.module.css'
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

function App() {
  //SearchBar functionality
  const [query, setQuery] = useState ('');

  // Search Results Array of Track objects
  const [searchResults, setSearchResults] = useState ([
    {
    id: 1,
    trackName: 'p-trackName1',
    artist: 'p-artist1',
    album: 'p-album1'
    },
    {
    id: 2,
    trackName: 'p-trackName2',
    artist: 'p-artist2',
    album: 'p-album2'
    }]);

  //Name of the playlist
  const [playlistName, setPlaylistName] = useState('Playlist Name...');

  // Playlist Array of Track objects
  const [playlistTracks, setPlaylistTracks] = useState ([
    {
    id: 3,
    trackName: 'p-trackName3',
    artist: 'p-artist3',
    album: 'p-album3'
    },
    {
    id: 4,
    trackName: 'p-trackName4',
    artist: 'p-artist4',
    album: 'p-album4'
    }]);

  // Functionality to add track from search results into playlist

  function addTrack(track) {
    //variable to check if the trackId is already found in the playlist
    //This variable iterates through the playlist array using find and returns the track(s) found
    const existingTrack = playlistTracks.find((t) => t.id === track.id);
    //Array that combines existing playlistTracks along with the selected track
    //Noticed I used concat and not push. Concat creates a new array (newTracks) while push will modify playlistTracks
    //We can use this later to setPlaylistTracks to newTracks
    const newTracks = playlistTracks.concat(track);
    //Now to check if the existing track is already in the playlist. If it comes out Truthy means it's there.  
    if (existingTrack) {
      console.log('track exists');
    } else {
      setPlaylistTracks(newTracks);
    }

  }

  function removeTrack(trackToRemove) {
    // Use filter() to create a new array without the trackToRemove
    const newTracks = playlistTracks.filter(track => track.id !== trackToRemove.id);
    setPlaylistTracks(newTracks);
  }
  

  return (
    <div className={styles.app}>
        <header className={styles.appHeader}>
          <h1>Music Jammmer</h1>
        </header>  

        <SearchBar query={query} setQuery={setQuery} />

        <div className={styles.dashboard}>
            <SearchResults userSearchResults={searchResults} onAdd={addTrack}/>
            <Playlist playlistName={playlistName} playlistTracks={playlistTracks} onRemove={removeTrack}/>
        </div>

        <div className={styles.saveToSpotify}>
          <button className={styles.btnSaveToSpotify}>Save to Spotify</button>
        </div>
        
        <footer className={styles.footer}>
          <span>© 2025 Blackheart Illustrations</span>
        </footer>
    </div>
  );
}

export default App;
