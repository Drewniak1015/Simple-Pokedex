import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ PokemonInfo }) => {
  return (
    <div className="cards flex items-center justify-center flex-wrap gap-8 mx-4 my-4">
      {PokemonInfo.length > 0 ? (
        PokemonInfo.map((element) => (
          <Link to={`/pokemon/${element.id}`} key={element.id}>
            <div className="card shadow-lg w-44 h-44 rounded-lg flex flex-col hover:scale-110 cursor-pointer duration-500 border-b-black border-solid border-2">
              <img
                src={element.img}
                alt={element.name}
                className="w-full h-5/6 p-2 object-cover border-b-black border-solid border-2"
              />
              <div className="infos flex justify-between px-3 my-1">
                <h1 className="font-semibold uppercase">{element.name}</h1>
                <h1 className="font-semibold">#{element.id}</h1>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <p>Brak Pokémonów...</p>
      )}
    </div>
  );
};

export default Cards;
