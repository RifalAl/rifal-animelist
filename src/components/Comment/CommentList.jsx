import React from "react";
import CommentItem from "./CommentItem";

const CommentList = async ({ comments }) => {
  return (
    <>
      <div className="grid grid-cols-1 justify-center gap-4">
        {comments.toReversed().map((comment, index) => (
          <CommentItem key={index} comment={comment} />
        ))}
      </div>
    </>
  );
};

export default CommentList;
