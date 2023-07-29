import React, { useState } from 'react';
import { validationSchemaThirdAddMy } from '../addPetValidation';
import StatusIndicator from '../StatusIndicator/StatusIndicator';
import Plus from '../../../images/icons/IconPlusAddPhoto';
import ButtonRoutes from '../Buttons/ButtonRoutes';
import { ButtonNext, ButtonPrev } from '../Buttons/Buttons';
import {
  Title,
  LabelAddPhoto,
  LabelPhoto,
  PreviewPhoto,
  PhotoContainer,
  ErrorTextLow,
  ErrorComment,
  CommentsContainerMyPet,
  LabelComments,
  InputComments,
} from './ThirdStep.styled';

const ThirdFormMyPet = ({
  handleNextData,
  handlePrevStep,
  formData,
  currentStatus,
  chooseOption,
}) => {
  const [imageURL, setImageURL] = useState('');
  const [comments, setComments] = useState('');
  const [errors, setErrors] = useState({});

  const handleDone = () => {
    validationSchemaThirdAddMy
      .validate({ imageURL, comments }, { abortEarly: false })
      .then(() => {
        handleNextData({ imageURL, comments });
      })
      .catch(err => {
        const validationErrors = {};
        if (err.inner) {
          err.inner.forEach(error => {
            validationErrors[error.path] = error.message;
          });
        }
        setErrors(validationErrors);
      });
  };

  const handleFileChange = e => {
    setImageURL(e.target.files[0]);
  };

  return (
    <div>
      <Title>Add my pet</Title>
      <StatusIndicator
        currentStatus={currentStatus}
        chooseOption={chooseOption}
      />

      <PhotoContainer>
        <LabelAddPhoto style={{ width: '115px' }}>
          Load the pet’s image:
        </LabelAddPhoto>
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
            {imageURL && (
              <PreviewPhoto src={URL.createObjectURL(imageURL)} alt="Pet" />
            )}
            <Plus />
          </LabelPhoto>
        </label>
        {errors.imageURL && <ErrorTextLow>{errors.imageURL}</ErrorTextLow>}
      </PhotoContainer>

      <CommentsContainerMyPet>
        <LabelComments htmlFor="comments">Comments</LabelComments>
        <InputComments
          id="comments"
          value={comments}
          placeholder="Type comment"
          onChange={e => setComments(e.target.value)}
        />
        {errors.comments && <ErrorComment>{errors.comments}</ErrorComment>}
      </CommentsContainerMyPet>

      <ButtonRoutes>
        <ButtonNext textButton="Done" handleNextData={handleDone} />
        <ButtonPrev textButton="Back" handlePrevStep={handlePrevStep} />
      </ButtonRoutes>
    </div>
  );
};

export default ThirdFormMyPet;
