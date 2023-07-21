import IconPawprint from 'images/icons/IconPawprint';
import {
  AuthNavContainer,
  // StyledIconPawprint,
  StyledNavLink,
} from './AuthNav.styled';
import { useAuth } from 'hooks';
import theme from 'components/theme';

export const AuthNav = () => {
  const { currentTheme } = useAuth();

  return (
    <AuthNavContainer>
      <StyledNavLink dark={'true'} to="/login">
        <span style={{ marginRight: 8 }}>Log In</span>
        <IconPawprint fill={theme[currentTheme].color.background} />
      </StyledNavLink>
      <StyledNavLink to="/register">Registration</StyledNavLink>
      {/* <StyledNavLink to="/user">user</StyledNavLink> */}
    </AuthNavContainer>
  );
};
