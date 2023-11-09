import React from "react";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const Movies = useSelector((store) => store.movies?.nowPlayingMovie);

  if (!Movies) return;
  const movie = Movies[0];

  const { original_title, overview, id } = movie;
  return (
    <div className="pt-[30%] bg-black md:pt-0 ">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
      {/* <h1>Hello</h1> */}
    </div>
  );
};

export default MainContainer;
