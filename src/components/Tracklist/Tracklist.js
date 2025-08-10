import React from 'react'
import styles from './Tracklist.module.css';
import Track from '../Track/Track';

function Tracklist(props) {
    return (
    <div className={styles.trackList}>
        <Track />
        <Track />
        <Track />
        <Track />
        <Track />
        <Track />
        <Track />
        <Track />
        <Track />
        <Track />
        <Track />
        <Track />
        <Track />
        <Track />
        <Track />
    </div>
    )
}

export default Tracklist;