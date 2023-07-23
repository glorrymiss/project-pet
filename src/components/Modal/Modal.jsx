import { useCallback, useEffect } from 'react';
import { Backdrop, ModalContainer, BtnStyled } from './Modal.styled';

export const Modal = ({ children, close }) => {
	const handleCloseModal = useCallback(({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      close();
    }
  }, [close]);

  useEffect(() => {
    document.addEventListener('keydown', handleCloseModal);

    return () => {
      document.removeEventListener('keydown', handleCloseModal);
    };
  }, [handleCloseModal]);

  return (
    <Backdrop onClick={handleCloseModal}>
		  <ModalContainer>
			  <BtnStyled icon={'IconCrossSmall'} transparent={true} onClick={close} />
			  			  {children}        
      </ModalContainer>
    </Backdrop>
  );
};
