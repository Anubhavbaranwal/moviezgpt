import { API_options } from "../utils/Constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMOvies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayMov = () => {
  const dispatch = useDispatch();
  const url = "https://api.themoviedb.org/3/movie/now_playing?page=1";

  const getdata = async () => {
    const data = await fetch(url, API_options);
    const json = await data.json();
    console.log(json?.results);
    dispatch(addNowPlayingMOvies(json.results));
  };
  useEffect(() => {
    getdata();
  }, []);
};

export default useNowPlayMov;
