import React from "react";
import SectionList from "../SectionList/SectionList";
import Container from "../UI/Container";
import { getNestedAnimeResponse, reproduce } from "@/service/api-service";

const RecomendedList = async () => {
  const recomendAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  const dataRandom = reproduce(recomendAnime, 10);
  return (
    <Container className="py-10">
      <SectionList
        data={dataRandom}
        title={"Recomended Anime"}
      />
    </Container>
  );
};

export default RecomendedList;
