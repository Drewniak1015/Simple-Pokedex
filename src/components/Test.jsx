import React from "react";
import { Link, useParams } from "react-router-dom";
const Test = ({ PokemonInfo, invidualPokemon }) => {
  const { id } = useParams();
  return (
    <>
      <div className="mainCard my-20 flex justify-center gap-24 items-start flex-wrap">
        <div className=" w-80 h-80 shadow-2xl rounded-xl flex flex-col border-b-black border-solid border-2 ">
          <img
            className="w-full h-5/6 p-2 object-cover border-b-black border-solid border-2"
            src={invidualPokemon.img}
          />
          <div className="infos flex justify-between px-3 items-center h-1/5">
            <h1 className="font-semibold uppercase text-2xl">
              {invidualPokemon.name}
            </h1>
            <h1 className="font-semibold text-2xl">#{invidualPokemon.id}</h1>
          </div>
        </div>

        <div className="infos flex gap-2 flex-col">
          <div
            className=" w-80 h-16 shadow-sm  rounded-xl flex flex-col border-b-black border-solid border-2 justify-center
        p-2"
          >
            <h1 className="font-semibold uppercase text-2xl">
              NAME: {invidualPokemon.name}
            </h1>
          </div>

          <div
            className=" w-80 h-16 shadow-sm  rounded-xl flex flex-col border-b-black border-solid border-2 justify-center
        p-2"
          >
            <h1 className="font-semibold uppercase text-2xl">
              Id: #{invidualPokemon.id}
            </h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center m-16">
        {" "}
        <Link to={"/Simple-Pokedex"}>
          <button className="border-emerald-400 border-solid border-4 bg-white rounded-xl shadow-lg h-20 w-40 text-black hover:bg-emerald-400 ease-linear text-xl">
            Back
          </button>{" "}
        </Link>
      </div>
    </>
  );
};

export default Test;
