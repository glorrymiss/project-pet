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
  ModalHeader,
  ModalPhoto,
  ModalInfo,
  ModalPersonality,
  ModalPersonalityField,
  ModalPersonalityKey,
  ModalPersonalityValue,
  ModalPersonalityLink,
  ModalComments,
  ModalButtons,
  BtnStyledWithIcon,
  ModalStatus,
  DeletePet,
  Wrapper,
} from './NoticesCategoriesItem.styled';
import Modal from 'shared/modal/NoticeItemModal/NoticeItemModal';
import ListIcons from 'images/icons/ListIcons';
import { Description } from 'components/NewsList/NewsList.styled';
import {
  addFavoriteNotices,
  removeNotices,
  removeNoticesToFavorite,
} from 'services/notices';
import { Notify } from 'notiflix';
import { useDispatch } from 'react-redux';
import { updateUserInfo } from 'redux/auth/operations';
import ModalAttention from 'components/ModalAttention/ModalAttention';

const NoticesCategoriesItem = ({ animal, setNoticesList }) => {
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isModalAtention, setModalAtention] = useState(false);
  const { isLoggedIn, user } = useAuth();
  const dispatch = useDispatch();

  // console.log('user', user);
  console.log('user?.favorite?', user?.favorite);
  Ядобавив;
  // console.log(
  //   'user?.favorite?.includes(animal._id)',
  //   user?.favorite?.includes(animal._id)
  // );

  if (2 === 1) {
    removeNotices('id');
    console.log('error', error);
  }
  const isCloseModal = () => setModalAtention(false);

  const handleClose = () => setIsOpen(false);

  const addToFavorite = id => {
    if (!isLoggedIn) {
      console.log('Запускажм модалку не авторизований');
      return;
    }

    if (user?.favorite?.includes(animal._id)) {
      console.log('Видаляємо в феворіт');
      dispatch(
        updateUserInfo({ favorite: user.favorite.filter(item => item !== id) })
      );
      removeNoticesToFavorite(id)
        .then(res => {
          if (res.status === 204) {
            Notify.success('Notices ad removed from favorites', {
              timeout: 4000,
            });
            setNoticesList(pref => pref.filter(item => item._id !== id));
          }
          setIsOpen(false);
        })
        .catch(err => {
          setError(err);
          Notify.failure(err.response.data.message, {
            timeout: 4000,
          });
        });
      return;
    }

    console.log('Добавляємо в феворіт');
    addFavoriteNotices(id)
      .then(res => {
        if (res.status === 200) {
          Notify.success('The notices has been added to favorites', {
            timeout: 4000,
          });
        }
        //   setIsOpen(false);
      })
      .catch(err => {
        setError(err);
        Notify.failure(err.response.data.message, {
          timeout: 4000,
        });
      });
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
          {isLoggedIn && (
            <DeletePet onClick={() => removeNotices(animal._id)}>
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

      <Modal isOpen={isOpen} handleClose={handleClose}>
        <ModalHeader>
          <ModalPhoto>
            <ModalStatus>
              {animal.category === 'for-free'
                ? 'In good hands'
                : animal.category}
            </ModalStatus>
            <img src={animal.photoUrl} alt={animal.name || 'animal'} />
          </ModalPhoto>
          <ModalInfo>
            <h2>{animal.title}</h2>
            <ModalPersonality>
              <ModalPersonalityField>
                <ModalPersonalityKey>Name:</ModalPersonalityKey>
                <ModalPersonalityValue>{animal.name}</ModalPersonalityValue>
              </ModalPersonalityField>

              <ModalPersonalityField>
                <ModalPersonalityKey>Birthday:</ModalPersonalityKey>
                <ModalPersonalityValue>{animal.birthday}</ModalPersonalityValue>
              </ModalPersonalityField>

              <ModalPersonalityField>
                <ModalPersonalityKey>Breed:</ModalPersonalityKey>
                <ModalPersonalityValue>{animal.breed}</ModalPersonalityValue>
              </ModalPersonalityField>

              <ModalPersonalityField>
                <ModalPersonalityKey>Location:</ModalPersonalityKey>
                <ModalPersonalityValue>{animal.place}</ModalPersonalityValue>
              </ModalPersonalityField>

              <ModalPersonalityField>
                <ModalPersonalityKey>The sex:</ModalPersonalityKey>
                <ModalPersonalityValue>{animal.sex}</ModalPersonalityValue>
              </ModalPersonalityField>

              <ModalPersonalityField>
                <ModalPersonalityKey>Email:</ModalPersonalityKey>
                <ModalPersonalityValue>
                  <ModalPersonalityLink href={`mailto:${animal.email}`}>
                    {animal.email}
                  </ModalPersonalityLink>
                </ModalPersonalityValue>
              </ModalPersonalityField>

              <ModalPersonalityField>
                <ModalPersonalityKey>Phone:</ModalPersonalityKey>
                <ModalPersonalityValue>
                  <ModalPersonalityLink href={`tel:${animal.phone}`}>
                    {animal.phone}
                  </ModalPersonalityLink>
                </ModalPersonalityValue>
              </ModalPersonalityField>
            </ModalPersonality>
          </ModalInfo>
        </ModalHeader>
        <div className="modal-footer">
          <ModalComments>
            <b>Comments:</b> {animal.comments}
          </ModalComments>
        </div>
        <ModalButtons>
          <BtnStyledWithIcon
            onClick={() => addToFavorite(animal._id)}
            bg={acceptColor}
          >
            Add to {ListIcons('#fff', 'IconHeart')}
          </BtnStyledWithIcon>
          <BtnStyled href={`tel:${animal.phone}`}>Contact</BtnStyled>
        </ModalButtons>
      </Modal>
    </NoticeItem>
  );
};

export default NoticesCategoriesItem;
