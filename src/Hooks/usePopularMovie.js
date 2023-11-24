import { API_options } from "../utils/Constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMOvies, addPopular } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovie = () => {
  const dispatch = useDispatch();
  const url = "https://api.themoviedb.org/3/movie/popular?page=1";

  const getdata = async () => {
    const data = await fetch(url, API_options);
    const json = await data.json();

    dispatch(addPopular(json.results));
  };
  useEffect(() => {
    getdata();
  }, []);
};

export default usePopularMovie;
