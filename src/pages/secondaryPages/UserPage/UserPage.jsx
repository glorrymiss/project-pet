import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { ModalCongrats } from 'components/ModalCongrats/ModalCongrats';
import { selectIsLoggedIn, selectIsFirstLogin } from 'redux/auth/selectors';
import { PetsData } from 'components/PetsData/PetsData';
import { UserData } from 'components/UserData/UserData';
import { Container } from './UserPage.styled';

const UserPage = () => {
  const [showModal, setShowModal] = useState(false);

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isFirstLogin = useSelector(selectIsFirstLogin);

  useEffect(() => {
    if (isLoggedIn && isFirstLogin) {
      setShowModal(true);
    }
  }, [isLoggedIn, isFirstLogin]);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal && <ModalCongrats closeModal={closeModal} />}
      <Container>
        <UserData />
        <PetsData />
      </Container>
    </>
  );
};

export default UserPage;
