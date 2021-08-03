import React, { useState } from 'react';
import axios from 'axios';
import '../styling/Search.scss';
import Gallery from './Gallery';
import { url, key, pageTotal } from '../utilities';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const searchTermChangeHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  const searchPhotosClickHandler = async () => {
    try {
      const searchResponse = await axios.get(`${url}${key}&query=${searchTerm}&per_page=${pageTotal}`);
      setSearchResults(searchResponse.data.results);
      setSearchTerm('');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div>
        <input
          className="search_box"
          type="text"
          value={searchTerm}
          onChange={searchTermChangeHandler}
        />
      </div>
      <div>
        <button
          className="search_button"
          disabled={!searchTerm}
          type="button"
          onClick={searchPhotosClickHandler}
        >
          search
        </button>
      </div>
      <Gallery searchResults={searchResults} />
    </div>
  );
};

export default Search;
