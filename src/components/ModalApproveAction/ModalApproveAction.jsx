import { Modal } from 'components/Modal/Modal';
import { StyledSection, Title } from './ModalApproveAction.styled';
import Btn from 'components/Btn/Btn';
import { Link } from 'react-router-dom';

export const ModalApproveAction = ({close, id}) => {
	return (
		<Modal close={close}>
			<StyledSection>
           <Title>Already leaving?</Title>
				<Btn text={'Cancel'} onClick={close}></Btn>
				<Link to='/login'>
					<Btn text={'Yes'} icon={'Iconlogout'} onClick={close}></Btn>
				</Link>
			</StyledSection>
	  </Modal>
  );
};
