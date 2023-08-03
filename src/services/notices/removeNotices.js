import axios from 'axios';

export const removeNotices = async noticeId => {
  const res = await axios.delete(`/api/notices/${noticeId}`);

  return res;
};
