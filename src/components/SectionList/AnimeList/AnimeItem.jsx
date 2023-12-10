import Link from "next/link";
import React from "react";
const AnimeItem = ({ title, image, id }) => {
  return (
    <div
      className="shadow-lg rounded-lg hover:bg-color-secondary bg-color-primary hover:scale-[1.02] transition-all ease-in cursor-pointer"
    >
      <Link href={`/anime/${id}`} className="">
        <img
          src={image}
          className="object-cover w-full h-[200px] md:h-[350px] rounded-t-lg"
          alt={title}
        />
        <h3 className="font-semibold text-sm md:text-lg p-4 leading-tight">
          {title}
        </h3>
      </Link>
    </div>
  );
};

export default AnimeItem;
