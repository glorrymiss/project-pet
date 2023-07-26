import { useSelector } from 'react-redux';

import { userPetsList } from 'redux/pets/pets-selectors';

export const usePets = () => {
  const pets = useSelector(userPetsList);


  return {
    pets,
  };
};
