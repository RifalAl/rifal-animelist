import React from "react";

const AnimeScore = ({rank, score, episodes, popularity}) => {
  return (
    <div className="flex gap-2 text-sm md:text-lg mb-5 md:mb-1 mt-2 items-center overflow-x-auto">
      <div className="w-[10rem] px-2 py-1 border-2 border-white rounded-md items-center flex flex-col justify-center gap-0">
        <h3>PERINGKAT</h3>
        <h3>{rank}</h3>
      </div>
      <div className="w-[10rem] px-2 py-1 border-2 border-white rounded-md items-center flex flex-col justify-center gap-0">
        <h3>SKOR </h3>
        <h3>{score}</h3>
      </div>
      <div className="w-[10rem] px-2 py-1 border-2 border-white rounded-md items-center flex flex-col justify-center gap-0">
        <h3>POPULARITAS</h3>
        <h3>{popularity}</h3>
      </div>
      <div className="w-[10rem] px-2 py-1 border-2 border-white rounded-md items-center flex flex-col justify-center gap-0">
        <h3>EPISODE</h3>
        <h3>{episodes}</h3>
      </div>
    </div>
  );
};

export default AnimeScore;
