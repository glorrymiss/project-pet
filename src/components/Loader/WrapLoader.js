import styled from 'styled-components';

export const WrapLoader = styled.div`
  height: calc(100vh - 40px);
  // padding-top: 40px;
  @media screen and (min-width: 768px) {
    // margin-top: 60px;
    height: calc(100vh - 60px);
  }
  @media screen and (min-width: 1280px) {
    // margin-top: 80px;
    height: calc(100vh - 68px);
  }
`;
