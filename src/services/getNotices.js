import axios from 'axios';

export const getNotices = async ({
  page,
  limit,
  query = '',
  categoryName = 'sell',
}) => {
  const res = await axios.get(
    `/api/notices/category/${categoryName}?&query=${query}&page=${page}&limit=${limit}`
  );

  return res;
};
