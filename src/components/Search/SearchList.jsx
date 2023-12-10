import React from "react";
import SectionList from "../SectionList/SectionList";
import Container from "../UI/Container";
import getAnimeResponse from "@/service/api-service";

const SearchList = async ({ keyword }) => {
  const searchAnime = await getAnimeResponse("anime", `q=${keyword}`)
  return (
    <Container className="pt-32 md:pt-24"> 
      <SectionList
        data={searchAnime.data}
        title={`Pencarian Untuk "${keyword}"`}
      />
    </Container>
  );
};

export default SearchList;
