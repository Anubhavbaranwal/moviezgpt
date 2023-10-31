import React, { useEffect, useState } from "react";
import { API_options } from "../utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";

const VideoBackground = ({ Id }) => {
  const trailervideo = useSelector((store) => store.movies?.trailervideo);
  useMovieTrailer(Id);
  return (
    <div>
      <iframe
        src={`https://www.youtube.com/embed/${trailervideo?.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
