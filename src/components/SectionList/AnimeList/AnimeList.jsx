import React from "react";
import AnimeItem from "./AnimeItem";
import CollectionItem from "@/components/Collection/CollectionItem";
const AnimeList = ({ data }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 pt-5">
      {data?.map((item, index) => {
        return (
          // <AnimeItem
          //   key={index}
          //   id={item.mal_id}
          //   title={item.title}
          //   image={item.images.webp.large_image_url}
          // />
          <CollectionItem
            key={index}
            id={item.mal_id}
            title={item.title}
            image={item.images.webp.large_image_url}
          />
        );
      })}
    </div>
  );
};

export default AnimeList;
