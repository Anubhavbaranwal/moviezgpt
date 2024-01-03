import React, { useEffect, useState } from "react";
import { API_options } from "../utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";
import PlayVideo from "./PlayVideo";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  return (
    <div className=" w-screen">
      <PlayVideo id={trailerVideo?.key} />
    </div>
  );
};

export default VideoBackground;
