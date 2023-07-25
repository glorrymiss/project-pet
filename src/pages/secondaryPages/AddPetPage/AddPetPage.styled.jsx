import styled from 'styled-components';

export const BodyBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${'' /* z-index: -1; */}
  background-image: url('../../../images/AddPetPageImages/bg-mobile.png');
  background-size: cover;

  @media screen and (min-width: 768px) {
    background-image: url('../../../images/AddPetPageImages/bg-tablet.png');
  }

  @media screen and (min-width: 1280px) {
    background-image: url('../../../images/MainPageImages/bg-lg@2x.png');
  }
`;
