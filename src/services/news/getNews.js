import axios from 'axios';

export const getNews = async ({ page, limit, query = '' }) => {
  const res = await axios.get(
    `api/news?query=${query}&page=${page}&limit=${limit}`
  );
  return res.data;
};
