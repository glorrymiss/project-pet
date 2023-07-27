import Btn from 'components/Btn/Btn';
import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;
export const ModalContainer = styled.div`
  background-color: ${p => p.theme.color.background};
  width: 280px;
  height: 300px;
  padding: 14px;
  margin: 0 auto;
  border-radius: 20px;
  z-index: 2000;
   @media screen and (min-width: 768px) {
    width: 580px;
	 height: 326px;
  }
`;
export const BtnStyled = styled(Btn)`
  border: none;
  margin-left: auto;
  padding: 0;

  /* @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  } */
`;
