import React, { useState } from 'react';
import { validationSchemaThirdAddSell } from '../addPetValidation';
import StatusIndicator from '../StatusIndicator/StatusIndicator';
import Plus from '../../../images/icons/IconPlusAddPhoto';
import MaleIcon from '../../../images/icons/IconMale';
import FemaleIcon from '../../../images/icons/IconFemale';
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

  const { file, comments, location, errors, price } = state;

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
                <SexButton value="female" label="Female">
                  <FemaleIcon fill="#888888" />
                  Female
                </SexButton>
                <SexButton value="male" label="Male">
                  <MaleIcon fill="#888888" />
                  Male
                </SexButton>
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
                  <Plus />
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
