import React from 'react';
import '../styles.css/SearchBar.css';

const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <div className="search-bar">
    <input
      type="text"
      className="search-bar__input"
      placeholder="Busca tu libro por título..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  </div>
);

export default SearchBar;
