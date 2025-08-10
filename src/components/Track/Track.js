import React from 'react'
import styles from './Track.module.css';
import trackLogo from './track.svg'

function Track() {
    return (
        <div className={styles.trackCard}>
            <div>
                <img src={trackLogo} alt="Album-Art" className={styles.albumArt} />
            </div>
            <div className={styles.songDetails}>
                <span>songName</span>
                <span>artist</span>
                <span>album</span>
            </div>
            <div>
                <button className={styles.trackButton}>➕</button>
            </div>
        </div>
    )
}

export default Track;