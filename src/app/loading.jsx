import Container from "@/components/UI/Container";
import React from "react";

const Loading = () => {
  return (
    <Container className="min-h-[100vh] max-w-[100vw] mx-auto flex justify-center items-center">
      <div className="flex justify-center">
        {/* <img
          src="/loading.svg"
          alt="loading image"
          className="w-[100px] md:w-[150px]"
        /> */}
        <span className="loader"></span>
      </div>
    </Container>
  );
};

export default Loading;
