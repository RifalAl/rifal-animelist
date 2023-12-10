"use client";

import React, { useEffect, useState } from "react";

import SectionList from "../SectionList/SectionList";
import Container from "../UI/Container";
import Pagination from "../UI/Pagination";
import getAnimeResponse from "@/service/api-service";

const Populer = () => {
  const [page, setPage] = useState(1);
  const [pagination, setPagination] = useState();
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const popularAnime = await getAnimeResponse("top/anime", `page=${page}`);

    setData(popularAnime.data);
    setPagination(popularAnime.pagination);
  };

  const smoothScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    fetchData();
    smoothScroll();
  }, [page]);

  return (
    <Container className="pt-32 md:pt-24">
      <SectionList
        data={data}
        title={`Anime Terpopuler - #${page}`}
        specificPage={true}
      />
      <Pagination pagination={pagination} page={page} onPage={setPage} />
    </Container>
  );
};

export default Populer;
