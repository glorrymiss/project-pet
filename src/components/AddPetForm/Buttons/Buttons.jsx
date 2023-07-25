import React from 'react';
import ArrowLeftIcon from '../../../images/icons/IconArrowLeft';
import PawPrintIcon from '../../../images/icons/IconPawprint1';
import { BtnPrev, BtnNext, BtnChoose, BtnContainer } from './Buttons.styled';

export const ButtonPrev = ({ textButton, handlePrevStep }) => {
  return (
    <BtnPrev type="button" onClick={handlePrevStep}>
      <ArrowLeftIcon color="#54ADFF" />
      {textButton}
    </BtnPrev>
  );
};

export const ButtonNext = ({ textButton, handleNextData }) => {
  return (
    <BtnNext onClick={handleNextData}>
      {textButton}
      <PawPrintIcon fill="#FEF9F9" />
    </BtnNext>
  );
};

const Button = ({ label, value, onClick }) => {
  return (
    <BtnChoose type="button" onClick={() => onClick(value)}>
      {label}
    </BtnChoose>
  );
};

export const ButtonChooseOption = ({ handleChooseChange }) => {
  const buttonsData = [
    { label: 'Your pet', value: 'your-pet', id: 1 },
    { label: 'Sell', value: 'sell', id: 2 },
    { label: 'Lost/found', value: 'lost-found', id: 3 },
    { label: 'In good hands', value: 'for-free', id: 4 },
  ];

  return (
    <BtnContainer>
      {buttonsData.map(button => (
        <li key={button.id}>
          <Button
            label={button.label}
            value={button.value}
            onClick={handleChooseChange}
          />
        </li>
      ))}
    </BtnContainer>
  );
};
