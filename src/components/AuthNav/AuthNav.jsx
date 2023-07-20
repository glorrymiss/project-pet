import { AuthNavContainer, StyledNavLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavContainer>
      <StyledNavLink to="/login">Log In</StyledNavLink>
      <StyledNavLink to="/register">Register</StyledNavLink>
      <StyledNavLink to="/user">user</StyledNavLink>
    </AuthNavContainer>
  );
};
