import axios from 'axios';

export const addNotices = async pet => {
  const {
    name,
    birthday,
    category,
    comments,
    file,
    breed,
    date,
    location,
    price,
    sex,
    title,
  } = pet;

  const formData = new FormData();
  file && formData.append('photoUrl', file);
  name && formData.append('name', name);
  birthday && formData.append('birthday', birthday);
  comments && formData.append('comments', comments);
  date && formData.append('birthday', date);
  location && formData.append('place', location);
  price && formData.append('price', price);
  sex && formData.append('sex', sex);
  title && formData.append('title', title);
  breed && formData.append('breed', breed);

  let response = {};

  if (
    category === 'sell' ||
    category === 'lost-found' ||
    category === 'for-free'
  ) {
    response = await axios.post(`/api/notices/${category}`, formData, {
      headers: { 'content-type': 'multipart/form-data' },
    });
  }

  return response;
};
