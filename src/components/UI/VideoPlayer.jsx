"use client";
import Youtube from "react-youtube";

import { Play, X } from "@phosphor-icons/react";
import { Button } from "@material-tailwind/react";
const VideoPlayer = ({ youtubeId, isOpen, onToogle }) => {
  const option = {
    width: "100%",
    height: "100%",
  };

  let content;
  let buttonToogle;

  if (isOpen) {
    content = (
      <div
        onClick={onToogle}
        className="fixed h-[100vh] w-[100vw] top-0 left-0 z-[99] bg-black/70 backdrop-blur-sm"
      >
        <div className="mx-auto h-[100vh] w-[100vw] flex justify-center items-center">
          <div className="flex justify-center">
            <Youtube
              onError={() => alert("Youtube id error")}
              videoId={youtubeId}
              onReady={(e) => e.target.playVideo()}
              className="w-[95vw] h-[40vh] md:w-[80vw] md:h-[80vh]"
              opts={option}
            />
          </div>
        </div>
      </div>
    );
    buttonToogle = (
      <div className="fixed top-2 right-2 z-[100]">
        <div className="transition-all ease-in">
          <button onClick={onToogle} className="float-right px-2 py-2">
            <X size={24} weight="bold" />
          </button>
        </div>
      </div>
    );
  } else {
    buttonToogle = (
      <div className="fixed bottom-2 right-2 z-[100] block md:hidden">
        <Button
          color="red"
          size="md"
          onClick={onToogle}
          className="float-right flex gap-2 items-center"
        >
          <Play size={18} weight="bold" /> Watch Trailer
        </Button>
      </div>
    );
  }
  return (
    <>
      {content}
      <div></div>
      {buttonToogle}
    </>
  );
};

export default VideoPlayer;
