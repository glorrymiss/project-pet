import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 40px;
  padding: 0 auto 24px;
  @media screen and (min-width: 320px) {
    width: 280px;
  }
  @media screen and (min-width: 768px) {
    width: 704px;
    margin-top: 0;
    padding-top: 60px;
  }

  @media screen and (min-width: 1280px) {
    width: 395px;
  }
`;
export const Title = styled.h2`
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.8px;
  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`;
