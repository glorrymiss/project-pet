import Btn from 'components/Btn/Btn';
import styled from 'styled-components';

export const StyledAppBar = styled.header`
  margin: 20px 20px;
  padding: 10px 0;
  background-color: ${({ theme }) => theme.color.background};
  height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;

  // background: ${({ theme }) => theme.color.gradient};
  // box-shadow: ${({ theme }) => theme.boxShadowHover};

  // @media screen and (min-width: 768px) {
  margin: 24px 32px;
  // }

  @media screen and (min-width: 1280px) {
    // width: 100%;
  }
`;

export const NavContainer = styled.div`
  ${({ isOpenMenu }) =>
    isOpenMenu
      ? `
  display:flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  align-items: center;
  z-index: -1;
  position: absolute;
  top: -20px;
  width: 100%;
  height: 100vh;
  `
      : `
      display:flex;
      width: 100%;
  flex-direction: row-reverse;
      `};

  background-color: ${({ theme }) => theme.color.background};
  // height: 1px;
  // background-color: red;

  @media screen and (min-width: 768px) {
    display: flex;
  }

  @media screen and (min-width: 1280px) {
    height: 28px;
    flex-direction: column-reverse;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: space-between;
    width: 100vw;
  }
`;

export const ButtonMenu = styled.button`
  margin-left: 8px;
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;

  width: 24px;
  height: 24px;

  // &:hover {
  //   box-shadow: ${({ theme }) => theme.boxShadow};
  // }

  // background: ${({ theme }) => theme.color.gradient};
  // box-shadow: ${({ theme }) => theme.boxShadowHover};

  @media screen and (min-width: 768px) {
    margin-left: 24px;
  }

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const StyleBtn = styled(Btn)`
  @media screen and (max-width: 767px) {
    ${({ isOpenMenu }) =>
      isOpenMenu
        ? `
      position: absolute;
      left: 0;
      bottom: 20px;
  `
        : `
      display: none;
      `};
  }

  @media screen and (min-width: 768px) {
    ${({ isOpenMenu }) =>
      isOpenMenu
        ? `
    position: absolute;
    right: 60px;
    top: 20px;
`
        : `
    display: none;
    `};
}
    // position: absolute;
    // right: 60px;
    // top: 26px;
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    // position: absolute;
    right: 131px;
    top: 0;
  }
`;
