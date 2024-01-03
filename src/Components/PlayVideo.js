import React from "react";

const PlayVideo = ({ id }) => {
  return (
    <div className="w-full">
      <iframe
        className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/" + id + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default PlayVideo;
