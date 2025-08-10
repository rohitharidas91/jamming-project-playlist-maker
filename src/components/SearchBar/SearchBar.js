import React from 'react'
import styles from './SearchBar.module.css';
import searchLogo from './search-svgrepo-com.svg'

function SearchBar({query, setQuery}) {
    const handleSubmit = (e) => {
        e.preventDefault()
        alert(query);
    }
    return  (
        <div className={styles.searchBar}>
            <form className={styles.searchForm} onSubmit={handleSubmit}>
                <img src={searchLogo} alt="looking-glass" className={styles.searchImg} />
                <input 
                    type='text'
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className={styles.inputBox}
                    placeholder='Look for a song...'
                />
                <button className={styles.searchButton} type='submit'>Go!</button>
            </form>
        </div>
        
    )
};


export default SearchBar;