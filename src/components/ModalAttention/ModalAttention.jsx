import Modal from 'components/Modal/Modal';
import {
  StyledSection,
  Title,
  WrapBtn,
  WrapText,
  StyledNavLink,
} from './ModalAttention.styled';
import { useAuth } from 'hooks';
import theme from 'components/theme';
import IconPawprint1 from 'images/icons/IconPawprint1';

const ModalAttention = ({ close }) => {
	const { currentTheme } = useAuth();
	
  return (
    <Modal onClick={close}>
      <StyledSection>
        <Title>Attention</Title>
        <WrapText>
          <p>
            We would like to remind you that certain functionality is available
            only to authorized users.If you have an account, please log in with
            your credentials. If you do not already have an account, you must
            register to access these features.
          </p>
        </WrapText>
        <WrapBtn>
          <StyledNavLink dark={'true'} to="/login">
            <span style={{ marginRight: 8 }}>Log In</span>
            <IconPawprint1 fill={theme[currentTheme].color.background} />
          </StyledNavLink>
          <StyledNavLink to="/register">
            Registration
          </StyledNavLink>
        </WrapBtn>
      </StyledSection>
    </Modal>
  );
};
export default ModalAttention;
