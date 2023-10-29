import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const Movies = useSelector((store) => store.movies?.nowPlayingMovie);
  if (!Movies) return;
  const movie = Movies[0];
  console.log(movie?.id);
  const Id=movie?.id;
  const { original_title, overview } = movie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground Id={Id}/>
    </div>
  );
};

export default MainContainer;
