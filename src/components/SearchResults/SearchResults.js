import React from 'react'
import styles from './SearchResults.module.css';
import Tracklist from '../Tracklist/Tracklist';

function SearchResults() {
    
    return (
        <div className={styles.container}>
            <h2 className={styles.tracklistHead}>Search Results</h2>
            <Tracklist />
        </div>
    )
    
}

export default SearchResults;