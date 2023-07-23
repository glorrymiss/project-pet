import React, { useState } from 'react';
import { validationSchemaThirdAddSell } from '../addPetValidation';
import StatusIndicator from '../StatusIndicator/StatusIndicator';
import { ReactComponent as Plus } from '../../../images/AddPetPageImages/Plus.svg';
import MaleIcon from '../../../images/AddPetPageImages/MaleIcon';
import FemaleIcon from '../../../images/AddPetPageImages/FemaleIcon';
import ButtonRoutes from '../Buttons/ButtonRoutes';
import { ButtonNext, ButtonPrev } from '../Buttons/Buttons';
import {
  Title,
  LabelAddPhoto,
  LabelPhoto,
  PreviewPhoto,
  InputComments,
  PointBlock,
  WrapForm,
  SexPhotoBlock,
  SexContainer,
  LabelSex,
  SexBlock,
  ErrorSex,
  PhotoContainerSell,
  ErrorTextLowSell,
  InputContainer,
  Label,
  Input,
  ErrorTextPrice,
  ErrorTextSellLocation,
  LabelCommentsSell,
  ErrorCommentSell,
  SexButton,
} from './ThirdStep.styled';
import css from './thirdStep.module.css';

const sexOptions = [
  {
    value: 'female',
    icon: <FemaleIcon color="#F43F5E" className={css.sexIcon} />,
    label: 'Female',
  },
  {
    value: 'male',
    icon: <MaleIcon color="#54adff" className={css.sexIcon} />,
    label: 'Male',
  },
];

const ThirdFormSell = ({
  formData,
  currentStatus,
  handleNextData,
  handlePrevStep,
  chooseOption,
}) => {
  const [state, setState] = useState({
    file: '',
    comments: '',
    location: formData.location || '',
    sex: formData.sex || '',
    price: formData.sex || '',
    active: null,
    errors: {},
  });

  const handleDone = () => {
    validationSchemaThirdAddSell
      .validate(state, { abortEarly: false })
      .then(() => {
        handleNextData(state);
      })
      .catch(err => {
        const validationErrors = {};
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        setState(prevState => ({ ...prevState, errors: validationErrors }));
      });
  };

  const handleFileChange = e => {
    const file = e.target.files[0];
    setState(prevState => ({ ...prevState, file }));
  };

  const handleSex = (option, number) => {
    setState(prevState => ({ ...prevState, sex: option, active: number }));
  };

  const { file, comments, location, active, errors, price } = state;

  return (
    <div>
      <WrapForm>
        <Title>Add pet for sell</Title>

        <StatusIndicator
          currentStatus={currentStatus}
          chooseOption={chooseOption}
        />
        <PointBlock>
          <SexPhotoBlock>
            <SexContainer>
              <LabelSex>The Sex</LabelSex>
              <SexBlock>
                {sexOptions.map((option, index) => (
                  <li key={index}>
                    <SexButton
                      type="button"
                      className={`${css.sexButton} ${
                        active === index + 1 ? css.sexButtonChoosed : ''
                      }`}
                      onClick={() => handleSex(option.value, index + 1)}
                    >
                      {option.icon}
                      {option.label}
                    </SexButton>
                  </li>
                ))}
              </SexBlock>
              {errors.sex && <ErrorSex>{errors.sex}</ErrorSex>}
            </SexContainer>

            <PhotoContainerSell>
              <LabelAddPhoto>Load the pet’s image:</LabelAddPhoto>
              <div>
                <input
                  type="file"
                  id="photo"
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                />
              </div>
              <label htmlFor="photo">
                <LabelPhoto>
                  {file && (
                    <PreviewPhoto src={URL.createObjectURL(file)} alt="Pet" />
                  )}
                  <Plus className={css.plusIcon} />
                </LabelPhoto>
              </label>
              {errors.file && (
                <ErrorTextLowSell>{errors.file}</ErrorTextLowSell>
              )}
            </PhotoContainerSell>
          </SexPhotoBlock>
          <InputContainer>
            <Label htmlFor="location">Location</Label>
            <Input
              type="text"
              id="location"
              value={location}
              onChange={e =>
                setState(prevState => ({
                  ...prevState,
                  location: e.target.value,
                }))
              }
              placeholder="Type of location"
            />
            {errors.location && (
              <ErrorTextSellLocation>{errors.location}</ErrorTextSellLocation>
            )}

            <Label htmlFor="price">Price</Label>
            <Input
              type="number"
              id="price"
              value={price}
              onChange={e =>
                setState(prevState => ({
                  ...prevState,
                  price: e.target.value,
                }))
              }
              required
              placeholder="Type of price"
            />
            {errors.price && <ErrorTextPrice>{errors.price}</ErrorTextPrice>}

            <LabelCommentsSell htmlFor="comments">Comments</LabelCommentsSell>
            <InputComments
              id="comments"
              value={comments}
              placeholder="Type comment"
              onChange={e =>
                setState(prevState => ({
                  ...prevState,
                  comments: e.target.value,
                }))
              }
            />
            {errors.comments && (
              <ErrorCommentSell>{errors.comments}</ErrorCommentSell>
            )}
          </InputContainer>
        </PointBlock>
        <ButtonRoutes>
          <ButtonNext textButton="Done" handleNextData={handleDone} />
          <ButtonPrev textButton="Back" handlePrevStep={handlePrevStep} />
        </ButtonRoutes>
      </WrapForm>
    </div>
  );
};

export default ThirdFormSell;
