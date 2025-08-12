import React from 'react'
import styles from './SearchResults.module.css';
import Tracklist from '../Tracklist/Tracklist';

function SearchResults(props) {
    
    return (
        <div className={styles.container}>
            <h2 className={styles.tracklistHead}>Search Results</h2>
            <Tracklist tracklist={props.userSearchResults} btnIcon={'➕'} onAdd={props.onAdd} isRemoval={false}/>
        </div>
    )
    
}

export default SearchResults;