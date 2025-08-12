import React, { useState } from 'react'
import styles from './Tracklist.module.css';
import Track from '../Track/Track';

function Tracklist(props) {
    
    if(!props.tracklist) {
        return (
            <div></div>
        )
    }     
    return (
    <div className={styles.trackList}>
        {props.tracklist.map((track) => {
            return (
            <Track 
            track={track}
            key={track.trackId}  // Add a unique key
            trackName={track.trackName}
            artist={track.artist}
            album={track.album}
            btnIcon={props.btnIcon}
            onAdd={props.onAdd}
            onRemove={props.onRemove}
            isRemoval={props.isRemoval}
            />
        )})}
    </div>
    )
}

export default Tracklist;