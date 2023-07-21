import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  height: auto;
  margin-right: 40px;

  white-space: nowrap;

  font-family: Manrope;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.8px;

  &.active {
    color: ${({ dark, theme }) =>
      dark === 'true' ? theme.color.background : theme.color.primary};
  }

  @media screen and (min-width: 768px) {
    // width: 100px;
  }

  @media screen and (min-width: 1280px) {
    // width: 100px;
  }
`;

export const NavContainer = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  // column-gap: 40px;
  // height: 100%;
  align-items: center;
  margin-left: 159px;

  @media screen and (min-width: 768px) {
    // width: 768px;
  }

  @media screen and (min-width: 1280px) {
    // width: 1280px;
  }
`;
