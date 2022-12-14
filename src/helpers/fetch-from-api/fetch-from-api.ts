import { ENV } from "common/enums/enums";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': ENV.API_KEY,
    'X-RapidAPI-Host': ENV.API_HOST,
  },
};

const fetchFromAPI = async (url: string) => {
  const res = await fetch(`${BASE_URL}/${url}`, options);
  const data = await res.json();

  return data;
};

export { fetchFromAPI };