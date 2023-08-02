import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ContainerNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
`;

export const BtnNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.color.btnDark};
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.56px;

  box-sizing: border-box;

  display: flex;
  height: 35px;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border-radius: 40px;

  background: ${({ theme }) => theme.color.btnLight};

  &.active {
    background: ${({ theme }) => theme.color.btnDark};
    color: ${({ theme }) => theme.color.background};
  }

  //   &:hover {
  //     background: ${({ theme }) => theme.color.gradient};
  //     color: ${({ theme }) => theme.color.background};
  //   }
`;
