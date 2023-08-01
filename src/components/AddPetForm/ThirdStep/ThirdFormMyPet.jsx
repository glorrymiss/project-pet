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
  LabelAddedPhoto,
} from './ThirdStep.styled';

const ThirdFormMyPet = ({
  handleNextData,
  handlePrevStep,
  formData,
  currentStatus,
  chooseOption,
}) => {
  const [state, setState] = useState({
    file: '',
    comments: '',
    active: null,
    errors: {},
  });

  const handleDone = () => {
    validationSchemaThirdAddMy
      .validate(state, { abortEarly: false })
      .then(() => {
        handleNextData(state);
      })
      .catch(err => {
        const validationErrors = {};
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        setState(prevState => ({ ...prevState }));
      });
  };

  const handleFileChange = e => {
    const file = e.target.files[0];

    if (!file) {
      return;
    }

    setState(prevState => ({ ...prevState, file }));
  };

  const handlePhotoClick = e => {
    const fileInput = document.getElementById('photo');
    if (fileInput && !fileInput.files[0]) {
      return;
    }

    const file = e.target.files[0];
    setState(prevState => ({ ...prevState, file }));
  };

  const { file, comments, errors } = state;

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
        {file ? (
          <>
            <LabelAddedPhoto htmlFor="photo" onClick={handlePhotoClick}>
              <PreviewPhoto src={URL.createObjectURL(file)} alt="Pet" />
            </LabelAddedPhoto>
          </>
        ) : (
          <>
            <LabelAddedPhoto htmlFor="photo">
              <LabelPhoto>
                <Plus />
              </LabelPhoto>
            </LabelAddedPhoto>
            {errors.file && <ErrorTextLow>{errors.file}</ErrorTextLow>}
          </>
        )}
      </PhotoContainer>

      <CommentsContainerMyPet>
        <LabelComments htmlFor="comments">Comments</LabelComments>
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
        {errors.comments && <ErrorComment>{errors.comments}</ErrorComment>}
      </CommentsContainerMyPet>

      <ButtonRoutes>
        <ButtonNext
          type="submit"
          textButton="Done"
          handleNextData={handleDone}
        />
        <ButtonPrev textButton="Back" handlePrevStep={handlePrevStep} />
      </ButtonRoutes>
    </div>
  );
};

export default ThirdFormMyPet;
