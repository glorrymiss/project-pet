import styled, { keyframes } from 'styled-components';

export const Wrap = styled.div`
  margin-top: 40px;
  @media screen and (min-width: 768px) {
    margin-top: 60px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 80px;
  }
`;

// Опишемо анімацію
export const walkAnimation = keyframes`
  /* appear */
  25% {
    opacity: 1;
  }
  /* disappear */
  100% {
    opacity: 0;
  }
`;
export const PawOne = styled.div`
  opacity: 0;
  position: absolute;
  top: 200px;
  left: -90px;
  transform: rotate(-40deg);
  animation: ${walkAnimation} 3s linear infinite;
  @media screen and (min-width: 768px) {
    top: 300px;
    left: 25px;
    transform: rotate(-40deg);
  }
  @media screen and (min-width: 1280px) {
    left: 75px;
    top: 360px;
  }
`;
export const PawTwo = styled.div`
  opacity: 0;
  position: absolute;
  left: 10px;
  top: 170px;
  transform: rotate(-2deg);
  animation: ${walkAnimation} 3s linear infinite 0.25s;
  @media screen and (min-width: 768px) {
    top: 280px;
    left: 200px;
    transform: rotate(-5deg);
  }
  @media screen and (min-width: 1280px) {
    left: 275px;
    top: 340px;
  }
`;
export const PawThree = styled.div`
  opacity: 0;
  position: absolute;
  left: 50px;
  top: 110px;
  transform: rotate(-15deg);
  animation: ${walkAnimation} 3s linear infinite 0.5s;
  @media screen and (min-width: 768px) {
    left: 280px;
    top: 160px;
    transform: rotate(-15deg);
  }
  @media screen and (min-width: 1280px) {
    left: 375px;
    top: 190px;
    transform: rotate(-10deg);
  }
`;
export const PawFour = styled.div`
  opacity: 0;
  position: absolute;
  top: 130px;
  left: 160px;
  transform: rotate(5deg);
  animation: ${walkAnimation} 3s linear infinite 0.75s;
  @media screen and (min-width: 768px) {
    top: 230px;
    left: 460px;
    transform: rotate(5deg);
  }
  @media screen and (min-width: 1280px) {
    left: 575px;
    top: 290px;
    transform: rotate(10deg);
  }
`;
export const PawFive = styled.div`
  display: none;
  @media screen and (min-width: 1280px) {
    display: block;
    opacity: 0;
    position: absolute;
    left: 725px;
    top: 110px;
    transform: rotate(10deg);
    animation: ${walkAnimation} 3s linear infinite 1s;
  }
`;
export const PawSix = styled.div`
  display: none;
  @media screen and (min-width: 1280px) {
    display: block;
    opacity: 0;
    position: absolute;
    left: 875px;
    top: 260px;
    transform: rotate(10deg);
    animation: ${walkAnimation} 3s linear infinite 1.25s;
  }
`;
export const PawSeven = styled.div`
  display: none;
  @media screen and (min-width: 1280px) {
    display: block;
    opacity: 0;
    position: absolute;
    left: 1075px;
    top: 110px;
    transform: rotate(20deg);
    animation: ${walkAnimation} 3s linear infinite 1.5s;
  }
`;
export const PawEight = styled.div`
  display: none;
  @media screen and (min-width: 1280px) {
    display: block;
    opacity: 0;
    position: absolute;
    left: 1150px;
    top: 310px;
    transform: rotate(10deg);
    animation: ${walkAnimation} 3s linear infinite 1.75s;
  }
`;
export const PadLarge = styled.div`
  background-color: #654321;
  border-radius: 63px 63px 63px 63px / 108px 108px 72px 72px;
  display: block;
  position: absolute;
  transform: rotate(80deg);
  width: 32px;
  height: 36px;
  left: 90px;
  top: 50px;
  @media screen and (min-width: 768px) {
    width: 54px;
    height: 60px;
    left: 100px;
    top: 50px;
  }
`;
export const PadSmallOne = styled.div`
  width: 10px;
  height: 12px;
  background-color: #654321;
  border-radius: 63px 63px 63px 63px / 108px 108px 72px 72px;
  display: block;
  position: absolute;
  transform: rotate(50deg);
  left: 120px;
  top: 40px;
  @media screen and (min-width: 768px) {
    width: 15px;
    height: 17px;
    left: 138px;
    top: 32px;
  }
`;
export const PadSmallTwo = styled.div`
  width: 10px;
  height: 12px;
  background-color: #654321;
  border-radius: 63px 63px 63px 63px / 108px 108px 72px 72px;
  display: block;
  position: absolute;
  transform: rotate(65deg);
  left: 132px;
  top: 56px;
  @media screen and (min-width: 768px) {
    width: 15px;
    height: 17px;
    left: 164px;
    top: 50px;
  }
`;
export const PadSmallThree = styled.div`
  width: 10px;
  height: 12px;
  background-color: #654321;
  border-radius: 63px 63px 63px 63px / 108px 108px 72px 72px;
  display: block;
  position: absolute;
  transform: rotate(98deg);
  left: 128px;
  top: 76px;
  @media screen and (min-width: 768px) {
    width: 15px;
    height: 17px;
    left: 168px;
    top: 84px;
  }
`;
export const PadSmallFour = styled.div`
  width: 10px;
  height: 12px;
  background-color: #654321;
  border-radius: 63px 63px 63px 63px / 108px 108px 72px 72px;
  display: block;
  position: absolute;
  transform: rotate(140deg);
  left: 112px;
  top: 86px;
  @media screen and (min-width: 768px) {
    width: 15px;
    height: 17px;
    left: 148px;
    top: 106px;
  }
`;
