"use client";

import { Rating } from "@material-tailwind/react";
import React from "react";

const AnimeRating = ({ onChange }) => {
  return (
    <div className="flex gap-5 items-center">
      <h2 className="text-xl font-semibold">Berikan Rating</h2>
      <Rating onChange={onChange} />
    </div>
  );
};

export default AnimeRating;
