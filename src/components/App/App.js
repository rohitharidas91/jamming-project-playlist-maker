import React from 'react';
import { useState } from "react";
import styles from './App.module.css'
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

function App() {
  const [query, setQuery] = useState ("");
  

  return (
    <div className={styles.app}>
        <header className={styles.appHeader}>
          <h1>Music Jammer</h1>
        </header>  

        <div className={styles.searchBar}>
          <SearchBar query={query} setQuery={setQuery} />
        </div>

        <div className={styles.dashboard}>
          <div className={styles.searchResults}>
            <div className={styles.tracklistHead}>
              <h2>Results</h2>
            </div>

            <div className={styles.tracklist}>
              <SearchResults />
            </div>
          </div>

          <div className={styles.playlist}>
            <div className={styles.tracklistHead}>
              <h2>Playlist</h2> 
            </div>
            <div className={styles.tracklist}>
              <Playlist />
            </div>
          </div>
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
