import styled from 'styled-components';

export const Container = styled.section`
  overflow: auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    padding: 0 32px;
    display: block;
  }
  @media screen and (min-width: 1280px) {
    align-items: stretch;
    padding: 0 16px;
    display: flex;
    flex-direction: row;
    gap: 32px;
  }
`;
