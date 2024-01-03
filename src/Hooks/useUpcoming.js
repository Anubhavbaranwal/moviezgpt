import { API_options } from "../utils/Constant";
import { useDispatch,useSelector } from "react-redux";
import { addTopRated, addUpcoming } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcoming = () => {
  const dispatch = useDispatch();
  const url = "https://api.themoviedb.org/3/movie/upcoming?page=1";
  const upcoming = useSelector((store) => store.movie?.upcoming);


  const getdata = async () => {
    const data = await fetch(url, API_options);
    const json = await data.json();

    dispatch(addUpcoming(json.results));
  };
  useEffect(() => {
   !upcoming && getdata();
  }, []);
};

export default useUpcoming;
