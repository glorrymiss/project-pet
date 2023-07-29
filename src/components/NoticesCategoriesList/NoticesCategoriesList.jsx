import NoticesCategoriesItem from "../NoticeCategoryItem/NoticesCategoriesItem"
import {NoticeContainer} from  "./NoticesCategoriesList.styled"

const gender = {
  male: "male",
  female: "female"
}

const status = {
  inGoodHands: "in good hands",
}


const NoticesCategoriesList = () => {
  const mockData = [
    {
      id: 1,
      status: status.inGoodHands,
      favorite: false,
      location: "Lviv",
      age: 1,
      gender: gender.female,
      img: require('./first.svg'),
      describe: "Cute cat is looking for a good owners"
    }
  ];
  return (
    <NoticeContainer>
      <NoticesCategoriesItem animal={mockData[0]}/>
      <NoticesCategoriesItem animal={mockData[0]}/>
      <NoticesCategoriesItem animal={mockData[0]}/>
      <NoticesCategoriesItem animal={mockData[0]}/>
    </NoticeContainer>
  );
};

export default NoticesCategoriesList;
