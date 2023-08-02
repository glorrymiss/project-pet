import axios from 'axios';

export const getNotices = async ({
  page,
  limit,
  search = '',
  categoryName = 'sell',
}) => {
  const res = await axios.get(
    `/api/notices/category/${categoryName}?&search=${search}&page=${page}&limit=${limit}`
  );

  return res;
};
