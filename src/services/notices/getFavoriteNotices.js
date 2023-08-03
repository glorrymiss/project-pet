import axios from 'axios';

export const getFavoriteNotices = async ({ page, limit, query = '' }) => {
  const res = await axios.get(
    `/api/notices/favorites/favorites?&query=${query}&page=${page}&limit=${limit}`
  );

  return res;
};
