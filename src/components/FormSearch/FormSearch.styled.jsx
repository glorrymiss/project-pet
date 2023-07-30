import styled from 'styled-components';

export const StuledInput = styled.input`
  box-sizing: border-box;
  display: block;
  margin: 40px auto 0 auto;

  width: 100%;

  @media screen and (min-width: 768px) {
    // height: 44px;
    // margin-top: 24px;
  }

  @media screen and (min-width: 1280px) {
    width: 608px;
  }
`;
