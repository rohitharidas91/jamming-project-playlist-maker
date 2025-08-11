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
          <h1>Music Jammmer</h1>
        </header>  

        <SearchBar query={query} setQuery={setQuery} />

        <div className={styles.dashboard}>
            <SearchResults />
            <Playlist />
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
