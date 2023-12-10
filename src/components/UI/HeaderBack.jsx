"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowSquareLeft } from "@phosphor-icons/react";

const HeaderBack = ({ title }) => {
  const router = useRouter();

  const backButtonHandler = (e) => {
    e.preventDefault();
    router.back();
  };

  return (
    <div className="flex items-center justify-between">
      <button onClick={backButtonHandler}>
        <ArrowSquareLeft size={32} />
      </button>

      <h1 className={`text-2xl lg:text-3xl text-white font-semibold`}>
        {title}
      </h1>
    </div>
  );
};

export default HeaderBack;
