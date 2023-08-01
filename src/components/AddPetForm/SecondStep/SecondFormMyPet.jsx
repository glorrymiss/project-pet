import React, { useState } from 'react';
import StatusIndicator from '../StatusIndicator/StatusIndicator';
import ButtonRoutes from '../Buttons/ButtonRoutes';
import { ButtonNext, ButtonPrev } from '../Buttons/Buttons';
import { validationSchema } from '../addPetValidation';
import {
  InputContainer,
  Label,
  Input,
  ErrorText,
  Title,
  InputsWrap,
} from './SecondStep.styled';

const SecondFormMyPet = ({
  handleNextData,
  handlePrevStep,
  formData,
  currentStatus,
}) => {
  const [formDataState, setFormDataState] = useState(formData);
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setFormDataState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleNextValidation = () => {
    validationSchema
      .validate(formDataState, { abortEarly: false })
      .then(() => {
        handleNextData(formDataState);
      })
      .catch(err => {
        const validationErrors = {};
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        setErrors(validationErrors);
      });
  };

  return (
    <div>
      <Title>Add my pet</Title>

      <StatusIndicator currentStatus={currentStatus} />
      <InputsWrap>
        <InputContainer>
          <Label htmlFor="name">Pet's name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formDataState.name}
            onChange={handleChange}
            placeholder="Type name pet"
          />
          {errors.name && <ErrorText>{errors.name}</ErrorText>}
        </InputContainer>
        <InputContainer>
          <Label htmlFor="birthday">Date of birth</Label>
          <Input
            type="date"
            id="birthday"
            name="birthday"
            value={formDataState.birthday}
            onChange={handleChange}
            required
            placeholder="dd.mm.yyyy"
          />
          {errors.birthday && <ErrorText>{errors.birthday}</ErrorText>}
        </InputContainer>
        <InputContainer>
          <Label htmlFor="breed">Breed</Label>
          <Input
            type="text"
            id="breed"
            name="breed"
            value={formDataState.breed}
            onChange={handleChange}
            required
            placeholder="Type breed"
          />
          {errors.breed && <ErrorText>{errors.breed}</ErrorText>}
        </InputContainer>
      </InputsWrap>
      <ButtonRoutes>
        <ButtonNext textButton="Next" handleNextData={handleNextValidation} />
        <ButtonPrev textButton="Back" handlePrevStep={handlePrevStep} />
      </ButtonRoutes>
    </div>
  );
};

export default SecondFormMyPet;
