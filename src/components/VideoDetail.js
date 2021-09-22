import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div className="ui segment" style={{ height: "500px" }}>
        <div className="ui active inverted dimmer">
          <div className="ui text loader">Loading...</div>
        </div>
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
