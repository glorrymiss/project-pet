import styled from 'styled-components';

export const TeamPageStyled = styled.div`
  position: relative;
  > div:not(:last-child) {
    overflow: visible;
    transform: scale(0.6);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
  }

  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const AddInfo = styled.div`
  font-family: Manrope;
  font-weight: 700;
  font-size: 10px;
  line-height: 3rem;
  color: cornflowerblue;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;

  position: fixed;
  z-index: 2;
  top: 65%;
  left: 5%;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    top: 75%;
    left: 15%;
  }

  @media screen and (min-width: 1280px) {
    font-size: 24px;
    top: 80%;
    left: 33%;
  }
  > p > a {
    display: inline-flex;
    align-items: center;
  }
`;
