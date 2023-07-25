import React from 'react';
import { Helmet } from 'react-helmet';
import AddPetChooseForm from 'components/AddPetForm/FirstStep/AddPetChooseForm';
import { Background } from '../../../components/Hero/Hero.styled';

const AddPetPage = () => {
  return (
    <>
      <Helmet>
        <title>Add Pet</title>
      </Helmet>
      <Background>
        <AddPetChooseForm />
      </Background>
    </>
  );
};

export default AddPetPage;
