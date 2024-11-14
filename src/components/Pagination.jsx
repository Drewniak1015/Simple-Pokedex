import React from "react";

const Pagination = ({ setPokemonPagination, previous, next }) => {
  return (
    <div className="flex justify-center gap-32 m-12">
      {previous && (
        <button
          className="border-emerald-400 border-solid border-4 bg-white rounded-xl shadow-lg h-16 w-28 text-black hover:bg-emerald-400 ease-linear"
          onClick={() => setPokemonPagination(previous)}
        >
          PREVIOUS
        </button>
      )}
      {next && (
        <button
          className="bg-emerald-300 rounded-xl shadow-lg h-16 w-28 text-black hover:bg-emerald-400 ease-linear"
          onClick={() => setPokemonPagination(next)}
        >
          NEXT
        </button>
      )}
    </div>
  );
};

export default Pagination;
