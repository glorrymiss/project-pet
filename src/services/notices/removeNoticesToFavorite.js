import axios from 'axios';

export const removeNoticesToFavorite = async noticeId => {
  const res = await axios.delete(`/api/notices/favorites/${noticeId}`);

  return res;
};
