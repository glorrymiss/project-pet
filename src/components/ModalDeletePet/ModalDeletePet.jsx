import { Modal } from 'components/Modal/Modal';
import {
  StyledSection,
  Title,
  WrapBtn,
  StyledBtn,
  StyledBtnYes,
  Text,
  Span,
} from './ModalDeletePet.styled';
import { useDispatch } from 'react-redux';
import { fetchPetDel } from 'redux/pets/operation';

export const ModalDeletePet = ({ close, id }) => {
  const dispatch = useDispatch();
  const hendleDeletePet = () => {
    dispatch(fetchPetDel(id));
    close();
  };
  return (
    <Modal onClick={close}>
      <StyledSection>
        <Title>Delete adverstiment?</Title>
        <Text>
          Are you sure you want to delete 
          <Span> “Cute dog looking for a home”? </Span> 
          You can`t undo this action.
        </Text>
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
