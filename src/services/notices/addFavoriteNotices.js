import axios from 'axios';

export const addFavoriteNotices = async noticeId => {
  const res = await axios.post(`/api/notices/favorites/${noticeId}`);

  return res;
};
