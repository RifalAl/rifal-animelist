import React from "react";
import Container from "../UI/Container";
import CollectionList from "./CollectionList";
import HeaderBack from "../UI/HeaderBack";
import { getCollectionsResponse } from "@/service/api-service";

const Collection = async () => {
  const collections = await getCollectionsResponse();
  return (
    <Container className="pt-32 md:pt-24">
      <HeaderBack title={"My Collection"} />
      <CollectionList collections={collections}/>
    </Container>
  );
};

export default Collection;
