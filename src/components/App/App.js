import React from 'react';
import { useState } from "react";
import styles from './App.module.css'
import SearchBar from '../SearchBar/SearchBar'
import Tracklist from '../Tracklist/Tracklist'

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
          <div className={styles.tracklist}>
            <h2>Results</h2>
            <Tracklist />
          </div>
          <div className={styles.tracklist}>
            <h2>Playlist</h2>
            <Tracklist />
          </div>
        </div>
    </div>
  );
}

export default App;
