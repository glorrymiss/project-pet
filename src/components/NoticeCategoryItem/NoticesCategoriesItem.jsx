import React, { useState } from 'react';
import { useAuth } from 'hooks';

import {
  Header,
  NoticeItem,
  Status,
  Information,
  InformationItem,
  Favorite,
  Top,
  Footer,
  BtnStyled,
  DeletePet,
  Wrapper,
} from './NoticesCategoriesItem.styled';
import ListIcons from 'images/icons/ListIcons';
import { Description } from 'components/NewsList/NewsList.styled';
import { removeNotices } from 'services/notices';
import { useDispatch } from 'react-redux';
import { addUserFavorite, removeUserFavorite } from 'redux/auth/operations';
import ModalAttention from 'components/ModalAttention/ModalAttention';
import { useParams } from 'react-router-dom';
import ModalNotices from 'components/ModalNotices/ModalNotices';

const NoticesCategoriesItem = ({ animal, setNoticesList }) => {
  const { categoryName } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [isModalAtention, setModalAtention] = useState(false);
  const { isLoggedIn, user } = useAuth();
  const dispatch = useDispatch();

  const isCloseModal = () => setModalAtention(false);

  const handleClose = () => setIsOpen(false);

  const addToFavorite = id => {
    if (!user?.favorite?.includes(animal._id)) {
      dispatch(addUserFavorite({ noticeId: animal._id }));
      return;
    }

    dispatch(removeUserFavorite({ noticeId: animal._id }));
    console.log('user', user);

    if (user?.favorite?.length === 0) {
      console.log('QQQ');
      setNoticesList([]);
    }
  };

  const acceptColor = '#54ADFF';

  return (
    <NoticeItem>
      <Header img={animal}>
        <Wrapper>
          <Top>
            <Status>
              {animal.category === 'for-free'
                ? 'In good hands'
                : animal.category}
            </Status>
            <Favorite
              isFavorite={user?.favorite?.includes(animal._id)}
              onClick={
                isLoggedIn
                  ? () => addToFavorite(animal._id)
                  : () => setModalAtention(true)
              }
            >
              {ListIcons(null, 'IconHeart')}
            </Favorite>
            {isModalAtention && <ModalAttention close={isCloseModal} />}
          </Top>
          {isLoggedIn && categoryName === 'own' && (
            <DeletePet
              onClick={() => {
                setNoticesList(pref =>
                  pref.filter(item => item._id !== animal._id)
                );
                removeNotices(animal._id);
              }}
            >
              {ListIcons(null, 'IconTrash2')}
            </DeletePet>
          )}
        </Wrapper>
        <Information>
          <InformationItem>
            {ListIcons(null, 'IconLocation1')}
            <span>{animal.place}</span>
          </InformationItem>
          <InformationItem>
            {ListIcons(null, 'IconClock')}
            <span>
              {animal.age} {animal.age > 1 ? 'years' : 'year'}
            </span>
          </InformationItem>
          <InformationItem>
            {ListIcons(null, animal.sex !== 'male' ? 'IconFemale' : 'IconMale')}
            <span>{animal.sex}</span>
          </InformationItem>
        </Information>
      </Header>
      <Footer>
        <Description>{animal.title}</Description>
        <BtnStyled onClick={() => setIsOpen(true)} color={acceptColor}>
          Learn more
        </BtnStyled>
      </Footer>

      {isOpen &&  <ModalNotices  handleClose={handleClose} animal={animal} addToFavorite={addToFavorite}></ModalNotices>}
   </NoticeItem>
  );
};

export default NoticesCategoriesItem;





