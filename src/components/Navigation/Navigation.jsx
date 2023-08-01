import { useAuth } from 'hooks';
import { NavContainer, StyledNavLink } from './Navigation.styled';

export const Navigation = ({ isOpenMenu }) => {
  const { isLoggedIn } = useAuth();

  return (
    <NavContainer isOpenMenu={isOpenMenu} isLoggedIn={isLoggedIn} id="navMenu">
      <StyledNavLink to="/news">News</StyledNavLink>
      <StyledNavLink to="/notices/sell">Find pet</StyledNavLink>
      <StyledNavLink to="/friends">Our friends</StyledNavLink>
      <StyledNavLink to="/team">Our team</StyledNavLink>
    </NavContainer>
  );
};
