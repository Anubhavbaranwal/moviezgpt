import React from "react";
import Header from "./Header";
import useNowPlayMov from "../Hooks/useNowPlayMov";


const Browse = () => {
  useNowPlayMov();
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
