import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  // props.videos

  const renderedList = videos.map((video) => (
    <VideoItem
      video={video}
      onVideoSelect={onVideoSelect}
      key={video.id.videoId}
    />
  ));

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
