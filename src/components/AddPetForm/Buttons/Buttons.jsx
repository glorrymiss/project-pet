import React from 'react';
import ArrowLeftIcon from '../../../images/icons/IconArrowLeft';
import PawPrintIcon from '../../../images/icons/IconPawprint1';
import {
  BtnPrev,
  BtnNext,
  BtnContainer,
  RadioInput,
  LabelStyled,
  BtnWrap,
} from './Buttons.styled';

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

const Button = ({ label, value, checked, onChange, isActive }) => {
  return (
    <LabelStyled isActive={isActive}>
      <RadioInput value={value} checked={checked} onChange={onChange} />
      {label}
    </LabelStyled>
  );
};

export const ButtonChooseOption = ({ handleChooseChange }) => {
  const [selectedValue, setSelectedValue] = React.useState('');

  const handleChange = event => {
    setSelectedValue(event.target.value);
    handleChooseChange(event.target.value);
  };

  const buttonsData = [
    { label: 'Your pet', value: 'your-pet', id: 1 },
    { label: 'Sell', value: 'sell', id: 2 },
    { label: 'Lost / found', value: 'lost-found', id: 3 },
    { label: 'In good hands', value: 'for-free', id: 4 },
  ];

  return (
    <form>
      <BtnContainer>
        {buttonsData.map(button => (
          <BtnWrap key={button.id}>
            <Button
              label={button.label}
              value={button.value}
              checked={selectedValue === button.value}
              onChange={handleChange}
              isActive={selectedValue === button.value}
            />
          </BtnWrap>
        ))}
      </BtnContainer>
    </form>
  );
};
