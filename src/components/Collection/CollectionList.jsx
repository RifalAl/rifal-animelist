"use client";

import React, { useEffect } from "react";
import CollectionItem from "./CollectionItem";
import { useRouter } from "next/navigation";

const CollectionList = async ({ collections }) => {
  const router = useRouter();
  useEffect(() => {
    router.refresh();
  }, []);
  return (
    <>
      {collections.length === 0 && (
        <div>
          <p className="text-center w-full mt-20">No collections</p>
        </div>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 pt-5">
        {collections &&
          collections.toReversed().map((item, index) => {
            return (
              <div key={index}>
                <CollectionItem
                  image={item.image}
                  title={item.title}
                  id={item?.mal_id}
                />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default CollectionList;
