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
