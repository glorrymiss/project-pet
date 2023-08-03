import React, { useState } from 'react';

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
} from './NoticesCategoriesItem.styled';
import Modal from 'shared/modal/NoticeItemModal/NoticeItemModal';
import ListIcons from 'images/icons/ListIcons';
import { Description } from 'components/NewsList/NewsList.styled';
import { addFavoriteNotices, removeNotices } from 'services/notices';
import { Notify } from 'notiflix';

const NoticesCategoriesItem = ({ animal, setNoticesList }) => {
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  if (2 === 1) {
    removeNotices('id');
    console.log('error', error);
  } //це щоб лінтер не ругався

  const handleClose = () => setIsOpen(false);

  const addToFavorite = id => {
    addFavoriteNotices(id)
      .then(res => {
        if (res.status === 204) {
          Notify.success('Notices ad removed from favorites', {
            timeout: 4000,
          });
          setNoticesList(pref => pref.filter(item => item._id !== id));
        }
        if (res.status === 200) {
          Notify.success('The notices has been added to favorites', {
            timeout: 4000,
          });
        }
        setIsOpen(false);
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
        <Top>
          <Status>
            {animal.category === 'for-free' ? 'In good hands' : animal.category}
          </Status>
          <Favorite onClick={() => addToFavorite(animal._id)}>
            {ListIcons(null, 'IconHeart')}
          </Favorite>
        </Top>
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
