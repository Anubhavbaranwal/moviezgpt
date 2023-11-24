import React from "react";
import Header from "./Header";
import useNowPlayMov from "../Hooks/useNowPlayMov";
import MainContainer from "./MainContainer";
import SubContainer from "./SubContainer";
import usePopularMovie from "../Hooks/usePopularMovie";
import useTopRated from "../Hooks/useTopRated";
import useUpcoming from "../Hooks/useUpcoming";

const Browse = () => {
  useNowPlayMov();
  usePopularMovie();
  useTopRated();
  useUpcoming();
  return (
    <div className="">
      <Header />
      <MainContainer />
      <SubContainer />
    </div>
  );
};

export default Browse;
