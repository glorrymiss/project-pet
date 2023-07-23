import React from 'react';
import AddPetChooseForm from 'components/AddPetForm/FirstStep/AddPetChooseForm';
import { Background } from '../../../components/Hero/Hero.styled';

const AddPetPage = () => {
  return (
    <Background>
      <AddPetChooseForm />
    </Background>
  );
};

export default AddPetPage;
