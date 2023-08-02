import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { showToast } from '../toastify';
import StatusIndicator from '../StatusIndicator/StatusIndicator';
import ButtonRoutes from '../Buttons/ButtonRoutes';
import { ButtonNext, ButtonPrev, ButtonChooseOption } from '../Buttons/Buttons';
import {
  FormContainer,
  FormContainerThird,
} from '../AddPetContainer/FormContainer';
import Modal from '../AddPetModal/Modal';

import SecondRenderStep from '../SecondStep/SecondRenderStep';
import ThirdFormMyPet from '../ThirdStep/ThirdFormMyPet';
import ThirdFormSell from '../ThirdStep/ThirdFormSell';
import ThirdFormLost from '../ThirdStep/ThirdFormLost';
import { Title } from './AddPetChooseForm.styled';

const AddPetChooseForm = () => {
  const [step, setStep] = useState(1);
  const [currentStatus, setCurrentStatus] = useState(1);
  const [chooseOption, setChooseOption] = useState('');
  const [activeButton, setActiveButton] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ file: '' });
  console.log('formData', formData);
  console.log('isLoading', isLoading);

  const navigate = useNavigate();
  // console.log('formData', formData);
  // const [state, setState] = useState({
  //   file: '',
  //   comments: formData.comments || '',
  //   location: formData.location || '',
  //   sex: formData.sex || '',
  //   price: formData.price || '',
  //   active: null,
  //   errors: {},
  // });

  // console.log('state', state);

  const handleChooseChange = (option, number) => {
    setFormData(prevData => ({ ...prevData, category: option }));
    setChooseOption(option);
    setActiveButton(number);
  };

  const handleNextDataOption = () => {
    const category = chooseOption;
    handleNextData({ category });
    if (category === '') {
      showToast('error', 'This is an error message.');
    }
  };

  const handleNextData = stepData => {
    setIsLoading(true);
    if (chooseOption) {
      setStep(step + 1);
      setCurrentStatus(currentStatus + 1);
    }
    setIsLoading(false);
    setFormData(prevData => {
      return { ...prevData, ...stepData };
    });

    // console.log('step', step);
  };

  const handlePrevStep = stepData => {
    setIsLoading(true);
    if (currentStatus > 1) {
      setCurrentStatus(currentStatus - 1);
    }
    setStep(step - 1);
    setIsLoading(false);
    setFormData(prevData => {
      return { ...prevData, ...stepData };
    });
  };

  const handleCancel = () => {
    navigate(-1);
  };

  const handleSubmitForm = () => {
    const sendDataForm = { ...formData };
    const { category } = sendDataForm;
    if (category === 'your-pet') {
      delete sendDataForm.category;
      const formDataSend = new FormData();

      for (const key in sendDataForm) {
        formDataSend.append(key, sendDataForm[key]);
      }
      setIsLoading(true);
    } else {
      const formDataSend = new FormData();

      for (const key in sendDataForm) {
        formDataSend.append(key, sendDataForm[key]);
      }
      setIsLoading(true);
    }
    // console.log('formData', formData);
    // dispatch(addPet(formData));

    switch (formData.category) {
      case 'your-pet':
        navigate('/user');
        break;
      case 'sell':
        navigate('/notices/sell');
        break;
      case 'lost-found':
        navigate('/notices/lost-found');
        break;

      default:
        navigate('/user');
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setIsLoading(true);
    switch (formData.category) {
      case 'your-pet':
        navigate('/user');
        break;
      case 'sell':
        navigate('/notices/sell');
        break;
      case 'lost-found':
        navigate('notices/lost-found');
        break;

      default:
        navigate('/user');
    }
  };

  return (
    <>
      {step === 1 && (
        <FormContainer>
          <Title>Add pet</Title>

          <StatusIndicator currentStatus={currentStatus} />
          <div
            style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
          >
            <ButtonChooseOption
              handleChooseChange={handleChooseChange}
              activeButton={activeButton}
            />
            <ButtonRoutes>
              <ButtonNext
                textButton="Next"
                handleNextData={handleNextDataOption}
              />
              <ButtonPrev textButton="Cancel" handlePrevStep={handleCancel} />
            </ButtonRoutes>
          </div>
        </FormContainer>
      )}

      {step === 2 && (
        <FormContainer>
          <SecondRenderStep
            formData={formData}
            setFormData={setFormData}
            chooseOption={chooseOption}
            currentStatus={currentStatus}
            handleNextData={handleNextData}
            handlePrevStep={handlePrevStep}
          />
        </FormContainer>
      )}

      {step === 3 && (
        <>
          {chooseOption === 'your-pet' && (
            <FormContainer>
              <ThirdFormMyPet
                currentStatus={currentStatus}
                handleNextData={handleSubmitForm}
                handlePrevStep={handlePrevStep}
                formData={formData}
                chooseOption={chooseOption}
                // state={state}
                // setState={setState}
                setFormData={setFormData}
              />
            </FormContainer>
          )}
          {['sell', 'lost-found', 'for-free'].includes(chooseOption) && (
            <FormContainerThird>
              {chooseOption === 'sell' ? (
                <ThirdFormSell
                  setFormData={setFormData}
                  currentStatus={currentStatus}
                  handleNextData={handleSubmitForm}
                  handlePrevStep={handlePrevStep}
                  formData={formData}
                  chooseOption={chooseOption}
                />
              ) : (
                <ThirdFormLost
                  titleForm={
                    chooseOption === 'lost-found'
                      ? 'Add lost pet'
                      : 'Pet in good hands'
                  }
                  currentStatus={currentStatus}
                  handleNextData={handleSubmitForm}
                  handlePrevStep={handlePrevStep}
                  formData={formData}
                  setFormData={setFormData}
                  chooseOption={chooseOption}
                />
              )}
            </FormContainerThird>
          )}
        </>
      )}

      {showModal && (
        <Modal onClose={handleCloseModal}>You added the pet!</Modal>
      )}
    </>
  );
};

export default AddPetChooseForm;
