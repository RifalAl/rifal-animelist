"use client";

import React, { useState } from "react";
import Container from "@/components/UI/Container";
import HeaderList from "@/components/SectionList/HeaderList";
import AnimeScore from "./AnimeScore";
import VideoPlayer from "../UI/VideoPlayer";
import { Button } from "@material-tailwind/react";
import { Play } from "@phosphor-icons/react";
import CollectionButton from "../UI/CollectionButton";
import CommentInput from "./CommentInput";

const Anime = ({ data, user, isCollection }) => {
  const [isOpen, setIsopen] = useState(false);

  const toogleCloseHandler = () => {
    setIsopen((prevItem) => !prevItem);
  };

  return (
    <Container className="pt-32 md:pt-24 relative mb-20 md:mb-10">
      <HeaderList title={`${data.title} - ${data.year || ""}`} />
      <div className="flex flex-col md:flex-row gap-5 mt-4 items-center">
        <div className="w-full md:w-3/12">
          <div className="block md:hidden">
            <AnimeScore
              rank={data.rank}
              score={data.score}
              popularity={data.popularity}
              episodes={data.episodes}
            />
          </div>
          <img
            src={data.images.webp.large_image_url}
            alt={data.title}
            className="h-[450px] object-cover rounded-md w-full"
          />
          <div className="hidden md:block">
            <Button
              color="red"
              size="lg"
              fullWidth
              onClick={toogleCloseHandler}
              className="flex gap-2 items-center justify-center mt-4"
            >
              <Play size={20} weight="bold" /> Watch Trailer
            </Button>
          </div>
          {user && (
            <CollectionButton
              user_email={user?.email}
              mal_id={data.mal_id}
              image={data.images.webp.large_image_url}
              title={data.title}
              isCollection={isCollection}
            />
          )}
        </div>
        <div className="w-full md:w-9/12">
          <div className="hidden md:block">
            <AnimeScore
              rank={data.rank}
              score={data.score}
              popularity={data.popularity}
              episodes={data.episodes}
            />
          </div>

          <div className="mt-5">
            <h4>
              Studio :{" "}
              {data.studios.map((item, index, row) => (
                <ItemSeparator key={index} title={item.name} row={row} />
              ))}
            </h4>
            <h4>
              Genre :{" "}
              {data.genres.map((item, index, row) => (
                <ItemSeparator key={index} title={item.name} row={row} />
              ))}
            </h4>
            <h4>Season : {data.season}</h4>
            <h4>Duration : {data.duration}</h4>
            <h4>Type : {data.type}</h4>
            <h4>Rating : {data.rating}</h4>
            <h4>
              Streaming :{" "}
              {data.streaming.map((item, index, row) => (
                <ItemSeparator title={item.name} key={index} row={row} />
              ))}
            </h4>
          </div>
          <div className="mt-5">
            <h3 className="text-2xl font-semibold ">Backround</h3>
            <p className="mt-2">{data.background || "-"}</p>
          </div>
          <div className="mt-5">
            <h3 className="text-2xl font-semibold">Synopsis</h3>
            <p className="mt-2">{data.synopsis}</p>
          </div>
        </div>
      </div>
      <div className="">
        <VideoPlayer
          youtubeId={data.trailer.youtube_id}
          isOpen={isOpen}
          onToogle={toogleCloseHandler}
        />
      </div>
      <div className="mt-10">
        <CommentInput
          user_email={user.email}
          mal_id={data.mal_id}
          user_name={user?.name}
          anime_title={data.title}
        />
      </div>
    </Container>
  );
};

const ItemSeparator = ({ title, index, row }) => {
  return (
    <span>
      {title}
      {index + 1 === row.length ? "" : ", "}
    </span>
  );
};

export default Anime;
