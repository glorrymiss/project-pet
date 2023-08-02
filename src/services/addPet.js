import axios from 'axios';

export const addPet = async pet => {
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
  console.log('category', category);

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

  console.log('formData', formData);

  let response = {};

  if (category === 'your-pet') {
    breed && formData.append('type', breed);

    response = await axios.post(`api/pets/`, formData, {
      headers: { 'content-type': 'multipart/form-data' },
    });
  }

  if (
    category === 'sell' ||
    category === 'lost-found' ||
    category === 'for-free'
  ) {
    category && formData.append('category', category);
    breed && formData.append('breed', breed);

    response = await axios.post(`/api/notices/${category}`, formData, {
      headers: { 'content-type': 'multipart/form-data' },
    });
  }

  return response;
};
