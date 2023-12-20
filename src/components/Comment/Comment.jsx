"use client";
import React from "react";
import Container from "../UI/Container";
import CommentList from "./CommentList";
import HeaderBack from "../UI/HeaderBack";

const Comment = ({ comments }) => {
  return (
    <Container className="pt-32 md:pt-24">
      <div className="mb-5">
        <HeaderBack title={"My Comment"} />
      </div>
      {comments.length === 0 ? (
        <p className="text-center">No comment</p>
      ) : (
        <CommentList comments={comments} />
      )}
    </Container>
  );
};

export default Comment;
