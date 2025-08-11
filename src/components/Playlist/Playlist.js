import React from 'react'
import styles from './Playlist.module.css';
import Tracklist from '../Tracklist/Tracklist';

function Playlist() {
    return (
        <div className={styles.container}>
          <h2 className={styles.tracklistHead}>Playlist</h2>
          <Tracklist />
        </div>
            
        
    )
}

export default Playlist;