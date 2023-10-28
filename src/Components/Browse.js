import React from "react";
import Header from "./Header";
import useNowPlayMov from "../Hooks/useNowPlayMov";
import MainContainer from "./MainContainer";
import SubContainer from "./SubContainer";

const Browse = () => {
  useNowPlayMov();
  return (
    <div>
      <Header />
      <MainContainer />
      <SubContainer />
    </div>
  );
};

export default Browse;
