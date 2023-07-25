import styled from 'styled-components';

export const StyledTitel = styled.h1`
  ${({ color }) => (color ? `color: ${color}` : `color: #111`)}
  text-align: center;
  font-family: Manrope;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-top: 40px;

  margin @media screen and (min-width: 768px) {
    font-size: 48px;
    margin-top: 80px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 48px;
    margin-top: 80px;
  }
`;
