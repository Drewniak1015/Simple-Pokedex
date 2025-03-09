import React, { useEffect, useState } from "react";
import "./font.css";
import Cards from "./components/Cards";
import Pagination from "./components/Pagination";
import { Routes, Route } from "react-router-dom";
import Test from "./components/Test";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [PokemonData, setPokemonData] = useState({
    pokemons: [],
    previous: null,
    next: null,
  });

  const [PokemonPagination, setPokemonPagination] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0"
  );
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    FetchData();
  }, [PokemonPagination]);

  async function FetchData() {
    try {
      const response = await fetch(PokemonPagination);
      if (!response.ok) {
        throw new Error("Nie udało się pobrać danych");
      }

      const data = await response.json();

      const pokemonPromises = data.results.map((pokemon) =>
        fetch(pokemon.url).then((res) => res.json())
      );

      const pokemonDataArray = await Promise.all(pokemonPromises);
      const new_data = pokemonDataArray.map((pokemonData) => ({
        id: pokemonData.id,
        img: pokemonData.sprites.front_default,
        name: pokemonData.name,
        types: pokemonData.types.map((typeInfo) => typeInfo.type.name),
      }));

      setPokemonData({
        pokemons: new_data,
        previous: data.previous,
        next: data.next,
      });
    } catch (error) {
      console.error(error);
    }
  }

  const filteredPokemons = PokemonData.pokemons.filter((pokemon) => {
    const term = searchTerm.toLowerCase();
    const nameMatches = pokemon.name.toLowerCase().includes(term);
    const idMatches = pokemon.id.toString() === term;
    const typeMatches = pokemon.types.some((type) => type.includes(term));

    return nameMatches || idMatches || typeMatches;
  });

  return (
    <div>
      <h1 className="text-4xl my-4 text-center font-extrabold">Pokedex</h1>

      <Routes>
        <Route path="/pokemon/:id" element={<Test />} />
        <Route
          path="/"
          element={
            <>
              <SearchBar
                setSearchTerm={setSearchTerm}
                searchTerm={searchTerm}
              />
              <Cards PokemonInfo={filteredPokemons} />
              <Pagination
                setPokemonPagination={setPokemonPagination}
                previous={PokemonData.previous}
                next={PokemonData.next}
              />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
