import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 20px;
  align-items: center;

  @media screen and (min-width: 768px) {
    padding: 0 32px;
  }

  @media screen and (min-width: 1280px) {
    padding: 0 16px;
  }
`;

export const FiltersContainer = styled.div`
  margin-top: 43px;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const WrapperFilter = styled.div`
  display: flex;
  column-gap: 12px;
`;

export const BtnAddPet = styled(NavLink)`
  @media screen and (max-width: 767px) {
    display: none;
  }
  display: flex;

  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.64px;

  width: 129px;
  height: 40px;
  box-sizing: border-box;
  padding: 8px 8px;
  gap: 8px;
  font-weight: 700;

  justify-content: center;
  align-items: center;

  border-radius: 40px;
  border: 2px solid ${({ theme }) => theme.color.btnDark};

  ${({ theme, transparent }) =>
    !transparent
      ? `color: ${theme.color.background}; background: ${theme.color.btnDark}`
      : `color: ${theme.color.btnDark}; background-color: transparent;`};

  &:hover {
    background: ${({ theme }) => theme.color.gradient};
    color: ${({ theme }) => theme.color.background};
  }
`;
export const BtnAddPetMob = styled(NavLink)`
  display: flex;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.64px;
  width: 129px;
  height: 40px;
  box-sizing: border-box;
  padding: 8px 8px;
  gap: 8px;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  border: 2px solid ${({ theme }) => theme.color.btnDark};

  ${({ theme, transparent }) =>
    !transparent
      ? `color: ${theme.color.background}; background: ${theme.color.btnDark}`
      : `color: ${theme.color.btnDark}; background-color: transparent;`};

  &:hover {
    background: ${({ theme }) => theme.color.gradient};
    color: ${({ theme }) => theme.color.background};
  }

  display: flex;
  flex-direction: column-reverse;
  width: 80px;
  height: 80px;
  position: absolute;
  font-size: 12px;
  top: 55%;
  right: 5%;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
