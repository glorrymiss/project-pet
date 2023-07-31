import { useCallback, useEffect } from 'react';
import { Backdrop, ModalContainer, BtnStyled } from './Modal.styled';

export const Modal = ({ children, onClick }) => {
	const handleKeyDown = useCallback(
    evt => {
      if (evt.code === 'Escape') {
        onClick();
      }
    },
    [onClick]
  );

  const handleBackdropClick = evt => {
    if (evt.currentTarget === evt.target) {
      onClick();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <Backdrop onClick={handleBackdropClick}>
      <ModalContainer>
        <BtnStyled icon={'IconCross'} transparent={true} onClick={onClick} />
        {children}
      </ModalContainer>
    </Backdrop>
  );
};
