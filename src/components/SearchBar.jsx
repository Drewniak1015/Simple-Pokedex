import React from "react";

const SearchBar = ({ setSearchTerm, searchTerm }) => {
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  return (
    <div className="my-8">
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Wyszukaj Pokemona po Nazwie / Id / Typie"
          className="rounded-xl shadow-lg h-16 w-96 text-black focus:border-emerald-400 border-solid border-2 outline-none text-center"
          onChange={handleInputChange}
          value={searchTerm}
        />
      </div>
    </div>
  );
};

export default SearchBar;
