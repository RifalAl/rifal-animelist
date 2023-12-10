import React from "react";
import Link from "next/link";

const HeaderList = ({ title, url, specificPage }) => {
  return (
    <div
      className={`${
        specificPage ? "justify-center" : "justify-between"
      } flex items-center`}
    > 
      
      <h1 className={`text-2xl lg:text-3xl text-white font-semibold ${!specificPage ? "border-l-2 border-l-color-dark pl-2" : "uppercase border-b-2 border-b-color-dark pb-1"}`}>
        {title}
      </h1>
      {url && (
        <Link
          href={url}
          className="hover:text-color-dark transition-all hover:underline hover:underline-offset-4 text-sm md:text-xl text-white"
        >
          Lihat semua
        </Link>
      )}
    </div>
  );
};

export default HeaderList;
