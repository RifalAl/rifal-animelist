"use client";

// import { Rating } from "@material-tailwind/react";
import React, { useState } from "react";

import { Star } from "@phosphor-icons/react";

const RatingsPreview = ({
  index,
  hover,
  rating,
  onEnter,
  onLeave,
  setRating,
}) => {
  const currentRating = index + 1;
  return (
    <label>
      <input
        className="hidden"
        type="radio"
        name="rating"
        value={currentRating}
        onClick={() => setRating(currentRating)}
      ></input>
      <Star
        className="cursor-pointer"
        size={28}
        weight={`${currentRating <= (hover || rating) ? "fill" : "regular"}`}
        color={`${currentRating <= (hover || rating) ? "#FFBB5C" : "#fff"}`}
        onMouseEnter={() => onEnter(currentRating)}
        onMouseLeave={onLeave}
      />
    </label>
  );
};

const AnimeRating = ({ setAnime_rating, rating, setRating }) => {
  const [hover, setHover] = useState(null);

  const mouseEnterHandler = (currentRating) => {
    setHover(currentRating);
    setAnime_rating(rating);
  };
  const mouseLeaveHandler = () => {
    setHover(null);
    setAnime_rating(rating);
  };

  return (
    <div className="flex gap-5 items-center">
      <h2 className="text-xl font-semibold">Berikan Rating :</h2>
      <div className="flex gap-1">
        {[...Array(5)].map((star, index) => (
          <RatingsPreview
            key={index}
            index={index}
            hover={hover}
            rating={rating}
            onEnter={mouseEnterHandler}
            onLeave={mouseLeaveHandler}
            setRating={setRating}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimeRating;
