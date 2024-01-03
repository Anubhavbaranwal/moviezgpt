import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_options } from "../utils/Constant";
import { addPlay } from "../utils/moviesSlice";

const useMoviePlay = (id) => {
  const dispatch = useDispatch();
  console.log(id);
  const trailerVideo = useSelector((store) => store.movies.Play);

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
      API_options
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addPlay(trailer));
  };
  useEffect(() => {
    !trailerVideo && getMovieVideos();
  }, []);
};
export default useMoviePlay;
