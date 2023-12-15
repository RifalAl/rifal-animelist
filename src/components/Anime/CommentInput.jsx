"use client";

import React, { useRef } from "react";
import HeaderList from "../SectionList/HeaderList";
import { Button } from "@material-tailwind/react";
import { ChatDots } from "@phosphor-icons/react";

const CommentInput = ({ user_email, mal_id, user_name, anime_title }) => {
  const inputComment = useRef();

  const postingHandler = async (e) => {
    e.preventDefault();
    const comment = inputComment.current.value;
    const data = { user_email, mal_id, comment, user_name, anime_title };
    try {
      const response = await fetch("/api/v1/comment", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const comment = await response.json();
      inputComment.current.value = "";
      alert("Posting Komentar Success!!");
    } catch (e) {
      console.log("SOMETHING ERROR");
    }
  };

  return (
    <>
      <HeaderList title="This is Comment Box" />
      <div className="mt-5">
        <textarea
          ref={inputComment}
          className="w-full rounded-md text-[#202020] px-3 py-3"
          name="comment"
          id=""
          rows="5"
          placeholder="masukkan komentar..."
        ></textarea>
        <Button
          onClick={postingHandler}
          className="float-right flex gap-2 items-center mt-2 md:w-auto justify-center w-full"
          color="red"
        >
          <ChatDots size={24} /> Posting Komentar
        </Button>
      </div>
    </>
  );
};

export default CommentInput;
