import axios from 'axios';

export const getUserNotices = async ({ page, limit, query = '' }) => {
  console.log('wwww');
  const res = await axios.get(
    `/api/notices?&query=${query}&page=${page}&limit=${limit}`
  );

  return res;
};
