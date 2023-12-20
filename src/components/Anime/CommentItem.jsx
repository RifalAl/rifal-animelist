import { Card, CardBody, Rating, Typography } from "@material-tailwind/react";
import { ChatCenteredDots, Star } from "@phosphor-icons/react";

import React from "react";

const CommentItem = ({ comment }) => {
  let ratings = [];
  for (let i = 0; i < 5; i++) {
    if (i < comment.anime_rating) {
      ratings.push(true);
    } else {
      ratings.push(false);
    }
  }

  return (
    <Card className="w-full">
      <CardBody>
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 flex items-center gap-1"
        >
          <ChatCenteredDots size={24} /> {comment.user_name}
        </Typography>
        <div className="flex gap-[1px] items-center">
          {ratings.map((rating, index) =>
            rating ? (
              <Star
                key={index}
                size={22}
                weight="fill"
                className="text-color-dark"
              />
            ) : (
              <Star key={index} size={22} className="text-color-dark" />
            )
          )}
        </div>
        {/* <Rating value={comment.anime_rating} readonly /> */}
        <Typography className="font-medium mt-2">{comment.comment}</Typography>
      </CardBody>
    </Card>
  );
};

export default CommentItem;
