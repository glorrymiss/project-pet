import axios from 'axios';

export const getFavoriteNotices = async ({
  page,
  limit,
  query = '',
  age,
  gender = '',
}) => {
  const res = await axios.get(
    `/api/notices/favorites/favorites?&query=${query}&page=${page}&limit=${limit}&age=${age}&gender=${gender}`
  );

  return res;
};
