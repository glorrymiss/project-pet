import { useCallback, useEffect } from 'react';
import { Backdrop, ModalContainer, BtnStyled } from './Modal.styled';

export const Modal = ({ children, closeModal }) => {
  const handleCloseModal = useCallback(
    ({ target, currentTarget, code }) => {
      if (target === currentTarget || code === 'Escape') {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleCloseModal);

    return () => {
      document.removeEventListener('keydown', handleCloseModal);
    };
  }, [handleCloseModal]);

  return (
    <Backdrop onClick={handleCloseModal}>
      <ModalContainer>
        <BtnStyled icon={'IconCross'} transparent={true} onClick={closeModal} />
        {children}
      </ModalContainer>
    </Backdrop>
  );
};
