import { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import Close from '../../../images/icons/IconCrossSmall';
import { Overlay, ModalWindow, BtnClose, ModalContent } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, closeModal }) => {
  const close = useCallback(
    ({ target, currentTarget, code }) => {
      if (target === currentTarget || code === 'Escape') {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, [close]);

  return createPortal(
    <Overlay onClick={closeModal}>
      <div>
        <ModalWindow>
          <BtnClose onClick={closeModal}>
            <Close />
          </BtnClose>
          <ModalContent>{children}</ModalContent>
        </ModalWindow>
      </div>
    </Overlay>,
    modalRoot
  );
};

export default Modal;
