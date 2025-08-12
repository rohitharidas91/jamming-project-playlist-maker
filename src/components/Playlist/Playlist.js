//import React, { useState } from 'react'
import styles from './Playlist.module.css';
import Tracklist from '../Tracklist/Tracklist';

function Playlist(props) {
  return (
    <div className={styles.container}>
      <input 
        className={styles.playlistName} 
        value={props.playlistName}
        onChange={(e) => props.setPlaylistName(e.target.value)} 
        placeholder='Create playlist...' />
      <Tracklist tracklist={props.playlistTracks} btnIcon={'➖'} onRemove={props.onRemove} isRemoval={true}/>
    </div>
  )
}

export default Playlist;