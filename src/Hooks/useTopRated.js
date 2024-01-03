import { API_options } from "../utils/Constant";
import { useDispatch ,useSelector} from "react-redux";
import { addTopRated } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRated = () => {
  const dispatch = useDispatch();
  const url = "https://api.themoviedb.org/3/movie/top_rated?page=1";
  const TR = useSelector((store) => store.movies?.TopRated);

  const getdata = async () => {
    const data = await fetch(url, API_options);
    const json = await data.json();

    dispatch(addTopRated(json.results));
  };
  useEffect(() => {
    !TR && getdata();
  }, []);
};

export default useTopRated;
