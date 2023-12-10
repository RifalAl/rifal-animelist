"use client";

import { Alert, Button } from "@material-tailwind/react";
import { Heart, X } from "@phosphor-icons/react";
import React, { useState } from "react";

const CollectionButton = ({ user_email, mal_id, isCollection, image, title }) => {
  const [isActive, setIsActive] = useState(isCollection);
  const [open, setOpen] = useState(false);

  const addToCollectionHandler = async (e) => {
    setOpen(true);
    e.preventDefault();
    const data = { user_email, mal_id, image, title };
    try {
      const response = await fetch("/api/v1/collection", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const collection = await response.json();
      setIsActive(true);
    } catch (e) {
      console.log("SOMETHING ERROR");
    }
  };

  const deleteCollectionHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/v1/collection/${mal_id}`, {
        method: "DELETE",
      });
    } catch (e) {
      console.log("SOMETHING ERROR");
    }
  };

  return (
    <>
      {!isActive ? (
        <>
          <Button
            color="red"
            size="lg"
            fullWidth
            onClick={addToCollectionHandler}
            className="flex gap-2 items-center justify-center mt-4 transition-all ease-out"
          >
            <Heart size={20} weight="fill" /> Add To Collection
          </Button>
        </>
      ) : (
        <>
          {open && (
            <Alert
              color="green"
              className="mt-5 transition-all ease-out"
            >
              Anime ditambahkan ke koleksi
            </Alert>
          )}
        </>
      )}
    </>
  );
};

export default CollectionButton;
