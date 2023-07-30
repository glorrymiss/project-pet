import React, { useState } from 'react';

import {
  Header, NotiveItem,
  Status, Information, InformationItem,
  Favorite, Top, Footer, BtnStyled,
  ModalHeader, ModalPhoto, ModalInfo, ModalPersonality,
  ModalPersonalityField, ModalPersonalityKey, ModalPersonalityValue, ModalPersonalityLink,
  ModalComments, ModalButtons, BtnStyledWithIcon, ModalStatus
} from "./NoticesCategoriesItem.styled";
import Modal from "shared/modal/NoticeItemModal/NoticeItemModal";
import ListIcons from 'images/icons/ListIcons';

const NoticesCategoriesItem = ({ animal }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  const addToFavorite = (id) => {
    console.log(`id is ${id}`);
  }

  const goToContact = () => {
    console.log(`go to ${mockData.contactLink}`);
  }

  const acceptColor = "#54ADFF";

  // TODO it must be replaced with a backend data
  const mockData = {
    status: "In good hands",
    breed: 'Pomeranian',
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, eveniet!",
    name: "Rich",
    birthday: '21.09.2020',
    location: 'Lviv',
    gender: 'male',
    email: 'user@gmail.com',
    phone: '+380971234567',
    comments: `Comments: Rich would be the perfect addition 
    to an active family that loves to play and go on walks.
     I bet he would love having a doggy playmate too!`,
    contactLink: 'https://google.com'
  };

  return (
    <NotiveItem>
      <Header img={animal.img}>
        <Top>
          <Status>{animal.status}</Status>
          <Favorite>
            {ListIcons(null, 'IconHeart')}
          </Favorite>
        </Top>
        <Information>
          <InformationItem>
            {ListIcons(null, 'IconLocation1')}
            <span>{animal.location}</span>
          </InformationItem>
          <InformationItem>
            {ListIcons(null, 'IconClock')}
            <span>{animal.age} {animal.age > 1 ? 'years' : 'year'}</span>
          </InformationItem>
          <InformationItem>
            {ListIcons(null, 'IconFemale')}
            <span>{animal.gender}</span>
          </InformationItem>
        </Information>
      </Header>
      <Footer>
        <h2>
          {animal.describe}
        </h2>
        <BtnStyled onClick={() => setIsOpen(true)} color={acceptColor}>
          Learn more
        </BtnStyled>
      </Footer>

      <Modal isOpen={isOpen} handleClose={handleClose}>
        <ModalHeader>
          <ModalPhoto>
            <ModalStatus>
              {mockData.status}
            </ModalStatus>
            <img src={animal.img.default} alt={mockData.name || "animal"} />
          </ModalPhoto>
          <ModalInfo>
            <h2>{mockData.title}</h2>
            <ModalPersonality>
              <ModalPersonalityField>
                <ModalPersonalityKey>
                  Name:
                </ModalPersonalityKey>
                <ModalPersonalityValue>
                  {mockData.name}
                </ModalPersonalityValue>
              </ModalPersonalityField>

              <ModalPersonalityField>
                <ModalPersonalityKey>
                  Birthday:
                </ModalPersonalityKey>
                <ModalPersonalityValue>
                  {mockData.birthday}
                </ModalPersonalityValue>
              </ModalPersonalityField>

              <ModalPersonalityField>
                <ModalPersonalityKey>
                  Breed:
                </ModalPersonalityKey>
                <ModalPersonalityValue>
                  {mockData.breed}
                </ModalPersonalityValue>
              </ModalPersonalityField>

              <ModalPersonalityField>
                <ModalPersonalityKey>
                  Location:
                </ModalPersonalityKey>
                <ModalPersonalityValue>
                  {mockData.location}
                </ModalPersonalityValue>
              </ModalPersonalityField>

              <ModalPersonalityField>
                <ModalPersonalityKey>
                  The sex:
                </ModalPersonalityKey>
                <ModalPersonalityValue>
                  {mockData.gender}
                </ModalPersonalityValue>
              </ModalPersonalityField>

              <ModalPersonalityField>
                <ModalPersonalityKey>
                  Email:
                </ModalPersonalityKey>
                <ModalPersonalityValue>
                  <ModalPersonalityLink href={`mailto:${mockData.email}`}>
                    {mockData.email}
                  </ModalPersonalityLink>
                </ModalPersonalityValue>
              </ModalPersonalityField>

              <ModalPersonalityField>
                <ModalPersonalityKey>
                  Phone:
                </ModalPersonalityKey>
                <ModalPersonalityValue>
                  <ModalPersonalityLink href={`mailto:${mockData.phone}`}>
                    {mockData.phone}
                  </ModalPersonalityLink>

                </ModalPersonalityValue>
              </ModalPersonalityField>
            </ModalPersonality>
          </ModalInfo>
        </ModalHeader>
        <div className='modal-footer'>
          <ModalComments>
            <b>Comments:</b> {mockData.comments}
          </ModalComments>
        </div>
        <ModalButtons>
          <BtnStyledWithIcon onClick={() => addToFavorite(mockData.id)} bg={acceptColor}>
            Add to {ListIcons('#fff', 'IconHeart')}
          </BtnStyledWithIcon>
          <BtnStyled onClick={() => goToContact(true)} color={acceptColor}>
            Contact
          </BtnStyled>
        </ModalButtons>
      </Modal>
    </NotiveItem>
  );
};

export default NoticesCategoriesItem;