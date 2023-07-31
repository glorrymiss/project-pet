import styled from 'styled-components';

export const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 20px;
  align-items: center;

  @media screen and (min-width: 768px) {
    padding: 0 32px;
  }

  @media screen and (min-width: 1280px) {
    padding: 0 16px;
  }
`;
