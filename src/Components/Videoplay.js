import React, { useEffect, useState } from "react";
import { API_options } from "../utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import useMoviePlay from "../Hooks/useMoviePlay";
import PlayVideo from "./PlayVideo";
import { useSearchParams } from "react-router-dom";

const VideoPlay = () => {
  const [params] = useSearchParams();
  const id = params.get("v");
  console.log(id);
  useMoviePlay(id);
  const trailerVideo = useSelector((store) => store.movies?.Play);
  console.log(trailerVideo);
  return (
    <div className=" w-screen">
      <PlayVideo id={trailerVideo?.key} />
    </div>
  );
};

export default VideoPlay;
