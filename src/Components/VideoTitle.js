import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 text-md w-1/3">{overview}</p>
      <div>
        <button className="text-black bg-white p-4 px-12 text-lg bg-opacity-50 rounded-lg ">
          ▶️ Play
        </button>
        <button className="text-black bg-white mx-2 p-4 px-12 text-lg bg-opacity-50 rounded-lg ">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
