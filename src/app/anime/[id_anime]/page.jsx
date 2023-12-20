import getAnimeResponse, {
  getCommentsResponse,
  getIsCollection,
} from "@/service/api-service";

import Anime from "@/components/Anime/Anime";
import React from "react";
import { getUser } from "@/service/auth-service";

const page = async ({ params }) => {
  const idAnime = params.id_anime;
  const anime = await getAnimeResponse(`anime/${idAnime}/full`);
  const data = anime?.data;
  const comment = await getCommentsResponse(data.mal_id);
  const isCollection = getIsCollection(idAnime);
  const user = await getUser();

  return (
    <Anime
      data={data}
      user={user}
      isCollection={isCollection}
      comments={comment}
    />
  );
};

export default page;
