import { BG_URL } from "../utils/Constant";
// import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchbar";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="h-screen object-cover" src={BG_URL} alt="logo" />
      </div>
      <div className="">
        <GptSearchBar />
        {/* <GptMovieSuggestions /> */}
      </div>
    </>
  );
};
export default GPTSearch;
