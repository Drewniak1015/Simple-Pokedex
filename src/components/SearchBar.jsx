import React from "react";

const SearchBar = ({ setSearchTerm, searchTerm }) => {
  return (
    <div className="flex justify-center my-8">
      <input
        type="text"
        placeholder="Wyszukaj Pokémona..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border-2 border-gray-300 rounded-lg p-2 w-64 focus:outline-none focus:border-emerald-400"
      />
    </div>
  );
};

export default SearchBar;
