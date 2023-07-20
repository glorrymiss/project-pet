import styled from 'styled-components';

export const ContainerLayout = styled.div`
  margin: auto;
  //   display: flex;
  //   padding: 10px 0;
  //   // margin: 20px 16px;
  //   // background: ${({ theme }) => theme.color.gradient};
  //   // box-shadow: ${({ theme }) => theme.boxShadowHover};

  @media screen and (min-width: 768px) {
    margin: auto;
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    margin: auto;
    width: 1280px;
  }
`;
