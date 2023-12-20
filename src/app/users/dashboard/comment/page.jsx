import React from "react";
import Comment from "@/components/Comment/Comment";
import { getOwnCommentsResponse } from "@/service/api-service";
const page = async () => {
  const comments = await getOwnCommentsResponse();
  return <Comment comments={comments} />;
};

export default page;
