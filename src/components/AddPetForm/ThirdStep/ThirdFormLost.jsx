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
  SexLabelStyled,
  SexRadioInput,
  SexButtonsWrap,
  LabelAddedPhoto,
} from './ThirdStep.styled';
import { addNotices } from 'services/notices';
import { Notify } from 'notiflix';

const ThirdFormLost = ({
  formData,
  currentStatus,
  handleNextData,
  handlePrevStep,
  chooseOption,
  handleSubmitForm,
  setFormData,
}) => {
  const [state, setState] = useState({
    // file: '',
    // comments: '',
    // location: formData.location || '',
    // sex: formData.sex || '',
    active: null,
    errors: {},
  });

  const [selectedValue, setSelectedValue] = React.useState('');

  const handleChange = event => {
    console.log('event.target', event.target);

    setSelectedValue(event.target.value);
    setFormData(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const SexButton = ({ checked, onChange, value }) => {
    const isActive = selectedValue === value;

    return (
      <SexLabelStyled htmlFor={value} isActive={isActive}>
        <SexRadioInput
          id={value}
          type="radio"
          name="sex"
          value={value}
          checked={selectedValue === value}
          onChange={onChange}
        />
        {value === 'female' ? (
          <FemaleIcon fill={isActive ? '#fff' : '#888888'} />
        ) : (
          <MaleIcon fill={isActive ? '#fff' : '#888888'} />
        )}
        {value === 'female' ? 'Female' : 'Male'}
      </SexLabelStyled>
    );
  };

  const handleDone = () => {
    validationSchemaThirdAddLost
      .validate(formData, { abortEarly: false })
      .then(() => {
        console.log('state', state);
        addNotices(formData)
          .then(res => {
            // console.log('res', res);
            handleNextData(state);
          })
          .catch(error => {
            console.log('error', error.response);
            Notify.failure(error.response.data.message, {
              timeout: 4000,
            });
            setFormData(prevState => ({ ...prevState, file: null }));
          });

        // handleNextData(state);
      })
      .catch(err => {
        console.log('err', err);

        const validationErrors = {};
        err.inner.forEach(error => {
          validationErrors[error.path] = error.message;
        });
        setState(prevState => ({ ...prevState, errors: validationErrors }));
      });
  };

  const handleFileChange = e => {
    const file = e.target.files[0];

    if (!file) {
      return;
    }

    setFormData(prevState => ({ ...prevState, file }));
  };

  const handlePhotoClick = e => {
    const fileInput = document.getElementById('photo');
    if (fileInput && !fileInput.files[0]) {
      return;
    }

    const file = e.target.files[0];
    setFormData(prevState => ({ ...prevState, file }));
  };

  const { errors } = state;

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

              <SexButtonsWrap>
                <SexButton onChange={handleChange} value="female" />
                <SexButton onChange={handleChange} value="male" />
              </SexButtonsWrap>
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
              {formData.file ? (
                <>
                  <LabelAddedPhoto htmlFor="photo" onClick={handlePhotoClick}>
                    <PreviewPhoto
                      src={URL.createObjectURL(formData.file)}
                      alt="Pet"
                    />
                  </LabelAddedPhoto>
                </>
              ) : (
                <>
                  <LabelAddedPhoto htmlFor="photo">
                    <LabelPhoto>
                      <Plus />
                    </LabelPhoto>
                  </LabelAddedPhoto>
                  {errors.file && (
                    <ErrorTextLowSell>{errors.file}</ErrorTextLowSell>
                  )}
                </>
              )}
            </PhotoContainerSell>
          </SexPhotoBlock>
          <InputContainer>
            <Label htmlFor="location">Location</Label>
            <Input
              type="text"
              id="location"
              value={formData?.location || ''}
              onChange={e =>
                setFormData(prevState => ({
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
              value={formData?.comments || ''}
              placeholder="Type comment"
              onChange={e =>
                setFormData(prevState => ({
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
          <ButtonNext
            type="submit"
            textButton="Done"
            handleNextData={handleDone}
          />
          <ButtonPrev textButton="Back" handlePrevStep={handlePrevStep} />
        </ButtonRoutes>
      </WrapperForm>
    </div>
  );
};

export default ThirdFormLost;
