import SearchList from "@/components/Search/SearchList";
import React from "react";

const pages = ({ params }) => {
  let keyword = params.keyword;
  keyword = keyword.replace(/%20/g, " ");
  return <SearchList keyword={keyword} />;
};

export default pages;
