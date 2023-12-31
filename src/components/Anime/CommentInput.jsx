"use client";

import React, { useCallback, useState } from "react";

import AnimeRating from "./AnimeRating";
import { Button } from "@material-tailwind/react";
import { ChatDots } from "@phosphor-icons/react";
import DialogAlert from "../UI/DialogAlert";
import { useRouter } from "next/navigation";

const CommentInput = ({ user_email, mal_id, user_name, anime_title }) => {
  const router = useRouter();
  const [inputComment, setInputComment] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [anime_rating, setAnime_rating] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);
  const [rating, setRating] = useState(null);

  const [openDialog, setOpenDialog] = useState(false);
  const toogleDialogHandler = () => setOpenDialog((prevItem) => !prevItem);

  const inputCommentChangeHandler = (e) => {
    setInputComment(e.target.value);
    if (e.target.value.trim().length >= 3) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const postingHandler = async (e) => {
    e.preventDefault();
    const comment = inputComment;
    const data = {
      user_email,
      mal_id,
      comment,
      user_name,
      anime_title,
      anime_rating,
    };

    if (!!isValid) {
      try {
        const response = await fetch("/api/v1/comment", {
          method: "POST",
          body: JSON.stringify(data),
        });
        const comment = await response.json();
        setInputComment("");
        setIsValid(false);
        setAnime_rating(0);
        setRating(null);
        setIsSuccess(true);
        toogleDialogHandler();
      } catch (e) {
        setIsSuccess(false);
        toogleDialogHandler();
      }
    } else {
      alert("masukkan minimal 3 karakter");
    }
  };

  const confirmSubmitHandler = () => {
    toogleDialogHandler();
    router.refresh();
  };

  return (
    <>
      <textarea
        onChange={inputCommentChangeHandler}
        className="w-full rounded-md text-[#202020] px-3 py-3"
        name="comment"
        id=""
        rows="5"
        placeholder="masukkan komentar..."
        value={inputComment}
      ></textarea>
      <p className="text-sm mt-1">*minimal 3 karakter</p>
      <div className="flex items-start lg:items-end mt-5 mb-5 flex-col">
        <AnimeRating
          setAnime_rating={setAnime_rating}
          setRating={setRating}
          rating={rating}
        />
        <div className="mt-4 w-full lg:w-auto">
          <Button
            onClick={postingHandler}
            className="flex gap-2 items-center md:w-auto justify-center w-full lg:w-auto"
            color="red"
            disabled={!isValid}
          >
            <ChatDots size={20} /> Posting Komentar
          </Button>
        </div>
      </div>

      {isSuccess && (
        <DialogAlert
          openDialog={openDialog}
          confirmSubmitHandler={confirmSubmitHandler}
          title="Sukses Posting Komentar"
          body="Komentar berhasil diposting!"
          isSuccess={isSuccess}
        />
      )}

      {!isSuccess && (
        <DialogAlert
          openDialog={openDialog}
          confirmSubmitHandler={confirmSubmitHandler}
          title="Gagal Posting Komentar"
          body="Komentar gagal diposting, coba lagi!"
          isSuccess={isSuccess}
        />
      )}
    </>
  );
};

export default CommentInput;
