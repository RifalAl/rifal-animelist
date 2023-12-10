import React from "react";
import CollectionItem from "./CollectionItem";

const CollectionList = async ({collections}) => {
  return (
    <>
      {collections.length === 0 && (
        <div>
          <p className="text-center w-full mt-20">No collections</p>
        </div>
      )}
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 pt-5">
        {collections &&
          collections.map((item, index) => {
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
