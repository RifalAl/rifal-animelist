import { Card, CardBody, Rating, Typography } from "@material-tailwind/react";

import Link from "next/link";
import { MonitorPlay } from "@phosphor-icons/react";
import React from "react";

const CommentItem = ({ comment }) => {
  return (
    <>
      <Card className="w-full cursor-pointer">
        <Link href={`/anime/${comment.mal_id}`}>
          <CardBody>
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-2 flex items-center gap-1"
            >
              <MonitorPlay size={24} /> {comment.anime_title}
            </Typography>
            <Typography>
              <Rating
                value={comment.anime_rating}
                readonly
                className="cursor-none"
                unratedColor="red"
                ratedColor="red"
              />
            </Typography>
            <Typography className="font-medium mt-2">
              {comment.comment}
            </Typography>
          </CardBody>
        </Link>
      </Card>
    </>
  );
};

export default CommentItem;
