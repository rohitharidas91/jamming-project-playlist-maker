import React from 'react';
import styles from './Track.module.css';
import trackLogo from './track.svg';

function Track(props) {

    //function that allows track to be passed from tracklist props
    function passTrack() {
        props.isRemoval ? props.onRemove(props.track) : props.onAdd(props.track);
    }
    

    return (
        <div className={styles.trackCard}>
            <div>
                <img src={trackLogo} alt="Album-Art" className={styles.albumArt} />
            </div>
            <div className={styles.songDetails}>
                <span>{props.trackName}</span>
                <span>{props.artist}</span>
                <span>{props.album}</span>
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.trackButton} onClick={passTrack} isRemoval={props.isRemoval}>{props.btnIcon}</button>
            </div>
        </div>
    )
}

export default Track;