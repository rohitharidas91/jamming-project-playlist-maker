import React, { useState } from 'react'
import styles from './Playlist.module.css';
import Tracklist from '../Tracklist/Tracklist';

function Playlist(props) {
  return (
    <div className={styles.container}>
      <h2 className={styles.tracklistHead}>{props.playlistName}</h2>
      <Tracklist tracklist={props.playlistTracks} btnIcon={'➖'} onRemove={props.onRemove} isRemoval={true}/>
    </div>
  )
}

export default Playlist;