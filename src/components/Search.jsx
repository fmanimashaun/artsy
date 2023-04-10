import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';

const Search = () => {
  const [search, setSearch] = useState(false);
  return (
    <div className="search">
      {search && <input type="text" placeholder="Search" />}
      <button type="button" onClick={() => setSearch((prev) => !prev)}>
        <BiSearch className="search-icon" />
      </button>
    </div>
  );
};

export default Search;
