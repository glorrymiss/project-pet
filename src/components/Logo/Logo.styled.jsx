import styled from 'styled-components';
import logo from '../../images/Logo.png';
import logoMax from '../../images/LogoMax.png';

export const StyleImg = styled.div`
  @media screen and (max-width: 767px) {
    width: 116px;
    height: 20px;
    background-image: url(${logo});
  }

  @media screen and (min-width: 768px) {
    width: 168px;
    height: 28px;
    background-image: url(${logoMax});
    background-repeat: no-repeat;
  }
`;
