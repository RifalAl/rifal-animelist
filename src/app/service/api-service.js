const getAnimeResponse = async (resource, query ) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
  );
  const data_anime = await response.json();
  return data_anime;
};

export default getAnimeResponse;
