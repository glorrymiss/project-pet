import styled from 'styled-components';

export const NoticeContainer = styled.div`
  display: grid;
  grid-row-gap: 24px;
  padding-bottom: 40px;
  grid-template-columns: 1fr;
  margin-top: 24px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 32px;
    padding-bottom: 60px;
    margin-top: 40px;
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(4, 288px);
    max-width: 1280px;
    margin: 0 auto;
    margin-top: 42px;
  }
`;
