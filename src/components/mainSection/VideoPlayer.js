import React from "react";

const VideoPlayer = ({ display, videoKey }) => {
  const color = { fill: "rgba(255,255,255,1)" };
  return (
    <div
      className=" relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity lg:px-20 sm:px-10 px-5 text-right flex flex-col justify-center">
        <div className="w-full aspect-video md:-mt-20 xl:-mt-0">
          <button onClick={display}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={color}
              width="60"
              height="60"
              viewBox="0 0 24 24"
            >
              <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
            </svg>
          </button>
          <div className="w-full h-full">
            <iframe
              className="w-full h-full"
              src={
                "https://www.youtube-nocookie.com/embed/" +
                videoKey +
                "?si=aeG8jpdFpt0grLMT"
              }
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
