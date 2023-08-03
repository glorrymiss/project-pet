import axios from 'axios';

export const getUserNotices = async ({
  page,
  limit,
  query,
  age,
  gender = '',
}) => {
  const res = await axios.get(
    `/api/notices?&query=${query}&page=${page}&limit=${limit}&age=${age}&gender=${gender}`
  );

  return res;
};
