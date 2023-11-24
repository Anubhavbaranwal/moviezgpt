import React from "react";
import Header from "./Header";
import useNowPlayMov from "../Hooks/useNowPlayMov";
import MainContainer from "./MainContainer";
import SubContainer from "./SubContainer";
import usePopularMovie from "../Hooks/usePopularMovie";
import useTopRated from "../Hooks/useTopRated";
import useUpcoming from "../Hooks/useUpcoming";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {
  const showGpt = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayMov();
  usePopularMovie();
  useTopRated();
  useUpcoming();
  return (
    <div className="">
      <Header />
      {showGpt ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SubContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
