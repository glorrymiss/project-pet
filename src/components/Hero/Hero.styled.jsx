import styled from 'styled-components';
/*
/**|======================================
/**| import bg images
/**|======================================
*/
import bg_sm_1x from '../../images/MainPageImages/bg-lg@1x.png';
import bg_sm_2x from '../../images/MainPageImages/bg-sm@2x.png';
import bg_md_1x from '../../images/MainPageImages/bg-md@1x.png';
import bg_md_2x from '../../images/MainPageImages/bg-md@2x.png';
import bg_lg_1x from '../../images/MainPageImages/bg-lg@1x.png';
import bg_lg_2x from '../../images/MainPageImages/bg-lg@2x.png';
/*
/**|======================================
/**| styled components
/**|======================================
*/

export const HeroTitle = styled.h1`
  font-size: 32px;

  @media screen and (min-width: 768px) {
    font-size: 68px;
  }

  @media screen and (min-width: 1280px) {
    width: 500px;
  }
`;

export const Cat1 = styled.img`
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const Dog1 = styled.img`
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const Dog2 = styled.img`
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const Background = styled.div`
  height: 100%;
  margin-left: auto;
  margin-right: auto;

  background-repeat: no-repeat;
  background-position: center -70px;
  background-size: 100%;

  background-image: url(${bg_sm_1x});

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${bg_sm_2x});
  }

  @media screen and (min-width: 768px) {
    background-size: 100%;
    background-position: center -100px;
    background-image: url(${bg_md_1x});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bg_md_2x});
    }
  }

  @media screen and (min-width: 1280px) {
    background-image: url(${bg_lg_1x});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${bg_lg_2x});
    }
  }
`;
