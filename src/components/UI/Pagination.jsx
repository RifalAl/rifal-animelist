import React from "react";
import { Button } from "@material-tailwind/react";
import { ArrowCircleLeft, ArrowCircleRight } from "@phosphor-icons/react";

const Pagination = ({ pagination, onPage, page }) => {
  const prevHandler = () => {
    if (page <= 1) {
      return;
    }
    onPage((prevItem) => prevItem - 1);
  };

  const nextHandler = () => {
    if (!pagination?.has_next_page) {
      return;
    }
    onPage((prevItem) => prevItem + 1);
  };
  return (
    <div className="pt-10 gap-2 flex justify-center items-center">
      <Button
        onClick={prevHandler}
        color="red"
        size="sm"
        disabled={page === 1 ? true : false}
        variant={page === 1 ? "text" : "filled"}
        className="rounded-full py-2 px-2 flex items-center gap-1"
      >
        <ArrowCircleLeft size={25} weight="bold" />Prev
      </Button>
      <p className="px-2 text-xl font-semibold">
        {page} of {pagination?.last_visible_page}
      </p>
      <Button
        onClick={nextHandler}
        color="red"
        size="sm"
        disabled={pagination?.has_next_page ? false : true}
        variant={pagination?.has_next_page ? "filled" : "text"}
        className="rounded-full py-2 px-2 flex items-center gap-1"
      >
        Next <ArrowCircleRight size={25} weight="bold" />
      </Button>
    </div>
  );
};

export default Pagination;
