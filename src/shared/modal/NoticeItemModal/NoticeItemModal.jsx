import React from 'react';
import ListIcons from 'images/icons/ListIcons';
import { ModalContainer, CloseButton, BackgroundDiv } from './NoticeItemModal.styled'

const Backdrop = () => {
    return (
        <BackgroundDiv />
    );
};

const Modal = ({ isOpen, handleClose, children }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <>
            <ModalContainer>
                {children}
                <CloseButton onClick={handleClose}> {ListIcons(null, 'IconPlus')}</CloseButton>
            </ModalContainer>
            <Backdrop />
        </>
    );
};

export default Modal;
