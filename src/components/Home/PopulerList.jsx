import React from "react";
import SectionList from "../SectionList/SectionList";
import Container from "../UI/Container";
import getAnimeResponse from "@/service/api-service";

const PopulerList = async () => {
  const popularAnime = await getAnimeResponse("top/anime", "limit=10")

  return (
    <Container className="pt-32 md:pt-24">
      <SectionList
        data={popularAnime.data}
        title={"Anime Populerx"}
        url={"/populer"}
      />
    </Container>
  );
};

export default PopulerList;
