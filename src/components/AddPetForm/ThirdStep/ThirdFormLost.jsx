import React, { useState } from 'react';
import { validationSchemaThirdAddLost } from '../addPetValidation';
import StatusIndicator from '../StatusIndicator/StatusIndicator';
import ButtonRoutes from '../Buttons/ButtonRoutes';
import { ButtonNext, ButtonPrev } from '../Buttons/Buttons';
import Plus from '../../../images/icons/IconPlusAddPhoto';
import MaleIcon from '../../../images/icons/IconMale';
import FemaleIcon from '../../../images/icons/IconFemale';
import {
  WrapperForm,
  Title,
  PointBlock,
  SexContainer,
  SexPhotoBlock,
  LabelSex,
  SexBlock,
  SexButton,
  ErrorSex,
  PhotoContainerSell,
  LabelAddPhoto,
  LabelPhoto,
  PreviewPhoto,
  ErrorTextLowSell,
  InputContainer,
  Label,
  Input,
  ErrorTextLostLocation,
  LabelCommentsSell,
  InputCommentsLost,
  ErrorCommentSell,
} from './ThirdStep.styled';
import css from './thirdStep.module.css';

const sexOptions = [
  {
    value: 'female',
    icon: <FemaleIcon fill="#F43F5E" />,
    label: 'Female',
  },
  {
    value: 'male',
    icon: <MaleIcon />,
    label: 'Male',
  },
];

const ThirdFormLost = ({
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
    active: null,
    errors: {},
  });

  const handleDone = () => {
    validationSchemaThirdAddLost
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

  const { file, comments, location, active, errors } = state;

  return (
    <div>
      <WrapperForm>
        <Title>Add lost pet</Title>
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
                  <Plus
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                  />
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
              <ErrorTextLostLocation>{errors.location}</ErrorTextLostLocation>
            )}
            <LabelCommentsSell htmlFor="comments">Comments</LabelCommentsSell>
            <InputCommentsLost
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
      </WrapperForm>
    </div>
  );
};

export default ThirdFormLost;
