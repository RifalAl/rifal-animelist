"use client";
import React, { useRef } from "react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();

  const searchAnimeHandler = (event) => {
    const keyword = searchRef.current.value;
    if (keyword.trim().length !== 0) {
      if (event.key === "Enter" || event.type === "click") {
        event.preventDefault();
        router.push(`/search/${keyword}`);
      }
    } else {
      return;
    }
  };

  return (
    <div className="grow relative text-[#202020]">
      <input
        ref={searchRef}
        type="text"
        placeholder="Cari anime...."
        className="p-2 rounded-md border-none w-full "
        onKeyDown={searchAnimeHandler}
      />
      <div className="absolute top-0 right-0">
        <button className="py-2 pr-2" onClick={searchAnimeHandler}>
          <MagnifyingGlass size={24} weight="bold" />
        </button>
      </div>
    </div>
  );
};

export default InputSearch;
