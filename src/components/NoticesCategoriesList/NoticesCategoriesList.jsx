import React from 'react';
import NoticesCategoriesItem from '../NoticeCategoryItem/NoticesCategoriesItem';
import { NoticeContainer } from './NoticesCategoriesList.styled';
import { useLocation } from 'react-router';

const gender = {
  male: 'male',
  female: 'female',
};

const status = {
  inGoodHands: 'in good hands',
};

const NoticesCategoriesList = () => {
  const location = useLocation();
  console.log('notices', location?.state?.notices);

  const mockData = [
    {
      id: 1,
      status: status.inGoodHands,
      favorite: false,
      location: 'Lviv',
      age: 1,
      gender: gender.female,
      img: require('./first.svg'),
      describe: 'Cute cat is looking for a good owners',
    },
    {
      id: 2,
      status: status.inGoodHands,
      favorite: false,
      location: 'Kyiv',
      age: 1,
      gender: gender.female,
      img: require('./first.svg'),
      describe: 'Cute cat is looking for a good owners',
    },
    {
      id: 3,
      status: status.inGoodHands,
      favorite: false,
      location: 'Kharkiv',
      age: 1,
      gender: gender.female,
      img: require('./first.svg'),
      describe: 'Cute cat is looking for a good owners',
    },
    {
      id: 4,
      status: status.inGoodHands,
      favorite: false,
      location: 'Lviv',
      age: 1,
      gender: gender.female,
      img: require('./first.svg'),
      describe: 'Cute cat is looking for a good owners',
    },
  ];
  return (
    <NoticeContainer>
      {mockData.map(item => {
        return <NoticesCategoriesItem key={item.id} animal={item} />;
      })}
    </NoticeContainer>
  );
};

export default NoticesCategoriesList;
