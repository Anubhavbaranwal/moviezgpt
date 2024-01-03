import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SubContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log(movies);
  return (
    movies && (
      <div className="bg-black">
        <div className="md:-mt-72 pl-4 relative z-30">
          <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovie} />
          <MovieList title={"Top Rated"} movies={movies?.TopRated} />
          <MovieList title={"Popular"} movies={movies?.Popular} />
          <MovieList title={"Upcoming Movie"} movies={movies?.Upcoming} />
        </div>
      </div>
    )
  );
};

export default SubContainer;
