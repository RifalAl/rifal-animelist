import { getUser } from "@/service/auth-service";
import prisma from "@/service/prisma";

const getAnimeResponse = async (resource, query) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
  );
  const data = await response.json();
  return data;
};

export const getCollectionsResponse = async () => {
  const user = getUser();
  const collections = await prisma.collection.findMany({
    where: { user_email: user.email },
  });
  return collections;
};

export const getIsCollection = async (mal_id) => {
  const user = getUser();
  const collection = await prisma.collection.findFirst({
    where: { user_email: user?.email, mal_id: parseInt(mal_id) },
  });
  const isCollection = !!collection;
  return isCollection;
};

export const getCommentsResponse = async (mal_id) => {
  const comments = await prisma.comment.findMany({
    where: { mal_id },
  });
  return comments;
};

export const getOwnCommentsResponse = async () => {
  const user = getUser();
  const comments = await prisma.comment.findMany({
    where: { user_email: user.email },
  });
  return comments;
};

export const getNestedAnimeResponse = async (resource, objectProperty) => {
  const response = await getAnimeResponse(resource);
  return response.data.flatMap((item) => item[objectProperty]);
};

export const reproduce = (data, gap) => {
  const first = Math.floor(Math.random() * (data.length - gap) + 1);
  const last = first + gap;
  const response = data.slice(first, last);
  return response;
};

export default getAnimeResponse;
