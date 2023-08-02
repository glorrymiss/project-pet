import axios from 'axios';

export const getUserNotices = async (page, limit, search = '') => {
  const res = await axios.get(
    `/api/notices?&search=${search}&page=${page}&limit=${limit}`
  );

  return res;
};
