import Modal from 'components/Modal/Modal';

import { StyledSection, Text, Title, StyledBtn } from './ModalCongtats.styled';

const ModalCongrats = ({ closeModal }) => {
  return (
    <Modal closeModal={closeModal}>
      <StyledSection>
        <Title>Congrats!</Title>
        <Text>Your registration is success</Text>
        <StyledBtn
          text={'Go to profile'}
          icon={'IconPawprint1'}
          onClick={closeModal}
        ></StyledBtn>
      </StyledSection>
    </Modal>
  );
};
export default ModalCongrats;
