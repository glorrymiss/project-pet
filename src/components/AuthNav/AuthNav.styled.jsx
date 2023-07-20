import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  // padding: 12px;
  font-weight: 700;
  color: #2a363b;
  width: 100px;

  .active {
    color: #e84a5f;
  }

  @media screen and (min-width: 768px) {
    // width: 768px;
  }

  @media screen and (min-width: 1280px) {
    // width: 1280px;
  }
`;

export const AuthNavContainer = styled.nav`
  display: flex;
  margin-left: ;
`;
