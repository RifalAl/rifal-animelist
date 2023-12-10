"use client";

import React, { useEffect, useState } from "react";
import { Carousel, IconButton } from "@material-tailwind/react";
const HeroCarousel = () => {
  const [data, setData] = useState();
  console.log(data);
  const fetchData = async () => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=2&limit=5`
    );
    const popularAnime = await response.json();
    setData(popularAnime.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Carousel
      loop={true}
      autoPlay={true} 
      transition={{ duration: 1 }}
      className="rounded-xl z-[3]"
    >
      {data?.map((item, index) => (
        <div key={index}  className="relative">
          <div className="after:content-[''] after:absolute after:w-full after:h-full after:z-[0] after:bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.6),rgba(0,0,0,0.5),rgba(0,0,0,0.4),rgba(0,0,0,0.4),rgba(0,0,0,0))] after:left-0 after:top-0">
            <img
              src={item.images.webp.large_image_url}
              alt={item.title}
              className="h-[100vh] w-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 px-10 py-10 z-[2]">
            <div className="flex flex-col">
              <h2 className="text-[65px] font-semibold">{item.title}</h2>
              <div className="flex gap-2">
                Time:
                {item}
              </div>
              <p className="w-6/12 leading-tight">{item.synopsis}</p>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default HeroCarousel;
