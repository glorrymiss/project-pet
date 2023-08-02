import axios from 'axios';

export const getFavoriteNotices = async (page, limit, search = '') => {
  const res = await axios.get(
    `/api/notices/favorites/favorites?&search=${search}&page=${page}&limit=${limit}`
  );

  return res;
};
