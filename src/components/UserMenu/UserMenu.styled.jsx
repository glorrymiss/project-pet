import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  @media screen and (min-width: 768px) {
    // width: 768px;
  }

  @media screen and (min-width: 1280px) {
    // width: 1280px;
  }
`;

export const UserName = styled.p`
  color: ${({ dark, theme }) =>
    dark === 'true' ? theme.color.background : theme.color.primary};

  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.64px;

  @media screen and (min-width: 768px) {
    // width: 768px;
  }

  @media screen and (min-width: 1280px) {
    // width: 1280px;
  }
`;
