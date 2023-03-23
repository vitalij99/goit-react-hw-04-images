import style from './SearchBar.module.css';
import PropTypes from 'prop-types';

import React from 'react';
import { useState } from 'react';

export const SearchBar = ({ getSearchToState }) => {
    const [query, setQuery] = useState('');

    const handleChange = ({ target }) => {
        setQuery(target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        getSearchToState(query);
    };
    return (
        <header className={style.Searchbar}>
            <form className={style.SearchForm} onSubmit={handleSubmit}>
                <button type="submit" className={style.SearchFormButton}>
                    <span className={style.SearchFormButtonLabel}>Search</span>
                </button>

                <input
                    className={style.SearchFormInput}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    onChange={handleChange}
                    value={query}
                />
            </form>
        </header>
    );
};

SearchBar.propTypes = {
    getSearchToState: PropTypes.func,
};
