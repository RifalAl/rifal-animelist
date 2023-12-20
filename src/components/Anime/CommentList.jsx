"use client";

import CommentItem from "./CommentItem";
import React from "react";

const CommentList = ({ comments }) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-4">
        {comments.toReversed().map((comment, index) => (
          <CommentItem key={index} comment={comment} />
        ))}
      </div>
    </>
  );
};

export default CommentList;
