import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SubContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log(movies);
  return (
    <div>
      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovie} />
    </div>
  );
};

export default SubContainer;
