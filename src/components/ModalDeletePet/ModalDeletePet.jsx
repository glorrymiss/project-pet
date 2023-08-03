import Modal from 'components/Modal/Modal';
import {
  StyledSection,
  Title,
  WrapBtn,
  StyledBtn,
  StyledBtnYes,
  Text,
  Span,
  WrapText,
} from './ModalDeletePet.styled';
import { useDispatch } from 'react-redux';
import { fetchPetDel } from 'redux/pets/operation';

 const ModalDeletePet = ({  id , name, close}) => {;
  const dispatch = useDispatch();
  const hendleDeletePet = () => {
    dispatch(fetchPetDel(id));
    close();
  };
  return (
    <Modal onClick={close}>
      <StyledSection>
        <Title>Delete adverstiment?</Title>
        <WrapText>
          <Text>
            Are you sure you want to delete
            <Span> "{name}" </Span>
          </Text>
          <Text>You can`t undo this action.</Text>
        </WrapText>
        <WrapBtn>
          <StyledBtn text={'Cancel'} onClick={close}></StyledBtn>
          <StyledBtnYes
            text={'Yes'}
            icon={'IconTrash2'}
            onClick={hendleDeletePet}
          ></StyledBtnYes>
        </WrapBtn>
      </StyledSection>
    </Modal>
  );
};
export default ModalDeletePet;
