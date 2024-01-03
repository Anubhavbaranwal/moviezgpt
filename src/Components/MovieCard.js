import React from "react";
import { Image_url } from "../utils/Constant";

const MovieCard = ({ posterpath }) => {
  if (!posterpath) return null;
  return (
    <div className="w-36 md:w-48 pl-4">
      <img alt="Moviescard" src={Image_url + posterpath} />
    </div>
  );
};

export default MovieCard;
