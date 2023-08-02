import React from 'react';
import SecondFormMyPet from './SecondFormMyPet';
import SecondFormSell from './SecondFormSell';
import SecondFormLost from './SecondFormLost';

const SecondRenderStep = ({
  handleNextData,
  handlePrevStep,
  chooseOption,
  formData,
  setFormData,
  currentStatus,
}) => {
  const optionToTitleForm = {
    'your-pet': undefined,
    sell: 'Add pet for sell',
    'lost-found': 'Add lost pet',
    'for-free': 'Pet in good hands',
  };

  const titleForm = optionToTitleForm[chooseOption];

  return (
    <>
      {chooseOption === 'your-pet' && (
        <SecondFormMyPet
          currentStatus={currentStatus}
          handleNextData={handleNextData}
          handlePrevStep={handlePrevStep}
          formData={formData}
          setFormData={setFormData}
        />
      )}

      {chooseOption === 'lost-found' && (
        <SecondFormLost
          currentStatus={currentStatus}
          handleNextData={handleNextData}
          handlePrevStep={handlePrevStep}
          formData={formData}
        />
      )}

      {(chooseOption === 'sell' || chooseOption === 'for-free') && (
        <SecondFormSell
          titleForm={titleForm}
          currentStatus={currentStatus}
          handleNextData={handleNextData}
          handlePrevStep={handlePrevStep}
          formData={formData}
        />
      )}
    </>
  );
};

export default SecondRenderStep;
