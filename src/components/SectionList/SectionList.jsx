import React from "react";
import Link from "next/link";

import AnimeList from "./AnimeList/AnimeList";
import HeaderList from "./HeaderList";
const SectionList = ({ data, title, url, specificPage }) => {
  return (
    <section>
      <HeaderList title={title} url={url} specificPage={specificPage}/>
      <AnimeList data={data} />
    </section>
  );
};

export default SectionList;
