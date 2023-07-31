
import styled, { keyframes } from 'styled-components';

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
 left: 75px;
 top: 300px;
 transform: rotate(-40deg);
 animation: ${walkAnimation} 3s linear infinite;
`
export const PawTwo = styled.div`
 opacity: 0;
 position: absolute;
 left: 275px;
 top: 280px;
 transform: rotate(-5deg); 
 animation: ${walkAnimation} 3s linear infinite 0.25s;
`
export const PawThree = styled.div`
 opacity: 0;
 position: absolute;
 left: 375px;
 top: 130px;
 transform: rotate(-10deg); 
 animation: ${walkAnimation} 3s linear infinite 0.5s;
`
export const PawFour = styled.div`
 opacity: 0;
 position: absolute;
 left: 575px;
 top: 280px;
 transform: rotate(-20deg); 
 animation: ${walkAnimation} 3s linear infinite 0.75s;
`
export const PawFive = styled.div`
 opacity: 0;
 position: absolute;
 left: 725px;
 top: 50px;
 transform: rotate(10deg); 
 animation: ${walkAnimation} 3s linear infinite 1s;
`
export const PawSix = styled.div`
 opacity: 0;
 position: absolute;
 left: 875px;
 top: 200px;
 transform: rotate(10deg); 
 animation: ${walkAnimation} 3s linear infinite 1.25s;
`
export const PawSeven = styled.div`
 opacity: 0;
 position: absolute;
 left: 1075px;
 top: 50px;
 transform: rotate(20deg); 
 animation: ${walkAnimation} 3s linear infinite 1.5s;
`
export const PawEight = styled.div`
 opacity: 0;
 position: absolute;
 left: 1150px;
 top: 250px;
 transform: rotate(10deg); 
 animation: ${walkAnimation} 3s linear infinite 1.75s;
`
export const PadLarge = styled.div`
  background-color: #654321;
  border-radius: 63px 63px 63px 63px / 108px 108px 72px 72px;
  display: block;
  position: absolute;
  width: 70px;
  height: 80px;
  transform: rotate(80deg);
  left: 100px;
  top: 50px;
`
export const PadSmallOne = styled.div`
  width: 25px;
  height: 27px;
  background-color: #654321;
  border-radius: 63px 63px 63px 63px / 108px 108px 72px 72px;
  display: block;
  position: absolute;
  transform: rotate(50deg);
  left: 145px;
  top: 28px;
`
export const PadSmallTwo = styled.div`
  width: 25px;
  height: 27px;
  background-color: #654321;
  border-radius: 63px 63px 63px 63px / 108px 108px 72px 72px;
  display: block;
  position: absolute;
  transform: rotate(65deg);
  left: 174px;
  top: 50px;
`
export const PadSmallThree = styled.div`
  width: 25px;
  height: 27px;
  background-color: #654321;
  border-radius: 63px 63px 63px 63px / 108px 108px 72px 72px;
  display: block;
  position: absolute;
  transform: rotate(98deg);
  left: 178px;
  top: 87px;
`
export const PadSmallFour = styled.div`
width: 25px;
  height: 27px;
  background-color: #654321;
  border-radius: 63px 63px 63px 63px / 108px 108px 72px 72px;
  display: block;
  position: absolute;
  transform: rotate(140deg);
  left: 158px;
  top: 117px;
`
// Стиль для `.pad`
export const Pad = styled.div`
  width: 25px;
  height: 27px;
  background-color: #654321;
  border-radius: 63px 63px 63px 63px / 108px 108px 72px 72px;
  display: block;
  position: absolute;
  
`;


// Стиль для `.large`
export const Large = styled(Pad)`
  width: 70px;
  height: 80px;
  transform: rotate(80deg);
  left: 100px;
  top: 50px;
`;

// Стиль для `.small1`, `.small2`, `.small3`, `.small4`
export const Small = styled(Pad)`
  opacity: 0;
  position: absolute;
`;

// Стилізуємо кожен `.small` під відповідний клас `.paw1` до `.paw8`
export const Paw1 = styled(Small)`
  left: 75px;
  top: 300px;
  transform: rotate(-40deg);
  animation: ${walkAnimation} 3s linear infinite;
`;

export const Paw2 = styled(Small)`
  left: 275px;
  top: 280px;
  transform: rotate(-5deg);
  animation: ${walkAnimation} 3s linear infinite 0.25s;
`;

export const Paw3 = styled(Small)`
  left: 375px;
  top: 130px;
  transform: rotate(-10deg);
  animation: ${walkAnimation} 3s linear infinite 0.5s;
`;

export const Paw4 = styled(Small)`
  left: 575px;
  top: 280px;
  transform: rotate(-20deg);
  animation: ${walkAnimation} 3s linear infinite 0.75s;
`;

export const Paw5 = styled(Small)`
  left: 725px;
  top: 50px;
  transform: rotate(10deg);
  animation: ${walkAnimation} 3s linear infinite 1s;
`;

export const Paw6 = styled(Small)`
  left: 875px;
  top: 200px;
  transform: rotate(10deg);
  animation: ${walkAnimation} 3s linear infinite 1.25s;
`;

export const Paw7 = styled(Small)`
  left: 1075px;
  top: 50px;
  transform: rotate(20deg);
  animation: ${walkAnimation} 3s linear infinite 1.5s;
`;

export const Paw8 = styled(Small)`
  left: 1150px;
  top: 250px;
  transform: rotate(10deg);
  animation: ${walkAnimation} 3s linear infinite 1.75s;
`;

