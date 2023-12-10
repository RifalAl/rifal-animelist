import React from "react";
import getAnimeResponse from "@/service/api-service";
import Anime from "@/components/Anime/Anime";
import { getUser } from "@/service/auth-service";

const page = async ({ params }) => {
  const idAnime = params.id_anime;
  const anime = await getAnimeResponse(`anime/${idAnime}/full`);
  const data = anime?.data;
  const user = await getUser();
  const collection = await prisma.collection.findFirst({
    where: {user_email: user?.email, mal_id: parseInt(idAnime)}
  })
  const isCollection = !!collection;
  return (
    <Anime data={data} user={user} isCollection={isCollection}/>
  );
};

export default page;
