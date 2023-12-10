import React from "react";

import Link from "next/link";
const CollectionItem = ({ image, title, id }) => {
  return (
    <div className="relative transition-all ease-in hover:scale-105 group">
      <Link href={`/anime/${id}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-[300px] md:h-[400px] object-cover rounded-md"
        />
        <div className="absolute w-full bottom-0 left-0 p-2 md:p-4 bg-black/60 backdrop-blur-sm rounded-b-md group-hover:bg-color-secondary transition-all ease-in">
          <h5 className="">{title}</h5>
        </div>
      </Link>
    </div>
  );
};

export default CollectionItem;
