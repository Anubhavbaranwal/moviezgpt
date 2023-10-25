import React, { useEffect } from "react";
import Header from "./Header";
import { API_options } from "../utils/Constant";

const Browse = () => {
  const url = "https://api.themoviedb.org/3/movie/now_playing?page=1";

  const getdata = async () => {
    const data = await fetch(url, API_options);
    const json = await data.json();
    console.log(json);
  };
  useEffect(() => {
    getdata();
  }, []);
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
