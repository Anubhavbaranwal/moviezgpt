import React, { useEffect, useState } from "react";
import { API_options } from "../utils/Constant";
import {useDispatch} from "react-redux";

const VideoBackground = ({ Id }) => {
  const dispatch=useDispatch();
  const [trailerId, setTrailerId] = useState(null);
  const getvideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${Id}/videos`,
      API_options
    );
    const json = await data.json();
    console.log(json);
    const filterdata = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterdata.length ? filterdata[0] : json.results[0];
    console.log(trailer);
    setTrailerId(trailer?.key);
    dispatch(addTrailerVideo(trailer?.key));
  };
  useEffect(() => {
    getvideo();
  }, []);
  return (
    <div>
      <iframe
        src={"https://www.youtube.com/embed/" + trailerId}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
