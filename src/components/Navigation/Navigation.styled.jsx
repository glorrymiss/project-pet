import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  // padding: 12px;
  font-weight: 700;
  color: #2a363b;
  white-space: nowrap;

  .active {
    color: #e84a5f;
  }

  @media screen and (min-width: 768px) {
    // width: 100px;
  }

  @media screen and (min-width: 1280px) {
    width: 100px;
  }
`;

export const NavContainer = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 40px;
  height: 27px;
  margin-left: 159px;

  @media screen and (min-width: 768px) {
    // width: 768px;
  }

  @media screen and (min-width: 1280px) {
    // width: 1280px;
  }
`;
