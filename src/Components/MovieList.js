import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ title, movies }) => {
  console.log(title);
  return (
    <div className="pl-10 pt-4 ">
      {/* <div> */}
      <h1 className="text-lg md:text-3xl py-4 text-white ">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {movies?.map((movies) => (
            <Link key={movies.id} to={"/play?v=" + movies.id} >
              <MovieCard  posterpath={movies.poster_path} />
            </Link>
          ))}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default MovieList;
