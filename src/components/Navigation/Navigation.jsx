// import { useAuth } from 'hooks';
import { NavContainer, StyledNavLink } from './Navigation.styled';

export const Navigation = () => {
  //   const { isLoggedIn } = useAuth();

  return (
    <NavContainer>
      <StyledNavLink to="/news">News Page</StyledNavLink>
      <StyledNavLink to="/notices">Find pet</StyledNavLink>
      <StyledNavLink to="/friends">Our friends</StyledNavLink>
      {/* {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>} */}
    </NavContainer>
  );
};
