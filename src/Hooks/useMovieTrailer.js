import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_options } from "../utils/Constant";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = ({id}) => {
  const dispatch = useDispatch();
  const [trailerId, setTrailerId] = useState(null);
  const getvideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos`,
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
};
export default useMovieTrailer;
