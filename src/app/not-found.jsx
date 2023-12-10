"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@material-tailwind/react";

import Container from "@/components/UI/Container";
import { ArrowFatLeft } from "@phosphor-icons/react";

const NotFound = () => {
  const router = useRouter();

  const backButtonHandler = (e) => {
    e.preventDefault();
    router.back();
  };

  return (
    <Container className="min-h-[100vh] max-w-[100vw] mx-auto flex justify-center items-center bg-[#FBB82F]">
      <div className="flex flex-col items-center justify-center">
        <img
          src="https://cdn.svgator.com/images/2022/01/404-page-design-animation.gif"
          alt=""
          className="h-[500px] object-cover"
        />
        <Button onClick={backButtonHandler} color="red" className="flex gap-2 items-center">
          <ArrowFatLeft size={20} weight="bold" />
          Kembali
        </Button>
      </div>
    </Container>
  );
};

export default NotFound;
