import axios from 'axios';

export const getNotices = async ({
  page,
  limit,
  query,
  categoryName = 'sell',
  age,
  gender,
}) => {
  const res = await axios.get(
    `/api/notices/category/${categoryName}?&query=${query}&page=${page}&limit=${limit}&age=${age}&gender=${gender}`
  );

  return res;
};
