import React from "react";
import Link from "next/link";
import InputSearch from "./InputSearch";
import SignInButton from "./SignInButton";
import { getUser } from "@/service/auth-service";

const Header = async () => {
  const user = await getUser();
  return (
    <header className="bg-color-accent/70 backdrop-blur-md p-5 md:px-20 md:py-5 fixed top-0 left-0 w-full z-[99]">
      <div className="flex flex-col gap-2 md:flex-row justify-center md:justify-between items-center">
        <div className="w-full md:w-9/12 flex justify-center md:justify-normal">
          <Link
            href="/"
            className="font-semibold text-2xl text-white uppercase text-center mb-2 md:mb-0"
          >
            <img src="/al_logo.svg" alt="" className="w-[75px] md:w-[100px]" />
          </Link>
        </div>
        <div className="flex w-full md:w-3/12 gap-2 items-center">
          <InputSearch />
          <SignInButton user={user}/>
        </div>
      </div>
    </header>
  );
};

export default Header;
