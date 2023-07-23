import styled from 'styled-components';

export const StyledContainer = styled.div`
  margin: 0 auto;
  // background: ${({ theme }) => theme.color.gradient};
  // box-shadow: ${({ theme }) => theme.boxShadowHover};
  margin: auto;
  min-width: 320px;
  min-height: 100vh;
  padding: 20px;

  @media screen and (min-width: 768px) {
    margin: auto;
    min-width: 704px;
    min-height: 100vh;
    padding: 24px 32px;
  }

  @media screen and (min-width: 1280px) {
    margin: auto;
    width: 1248px;
    min-height: 100vh;
    padding: 20px 16px;
  }
`;
