import styled from 'styled-components';

export const NewsContainer = styled.ul`
  flex-grow: 1;

  padding-top: 60px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 31px;
  row-gap: 24px;
`;

export const NewsItem = styled.li``;

export const Rectangle = styled.div`
  width: 395px;
  height: 8px;
  flex-shrink: 0;
  border-radius: 40px;

  background: ${({ theme }) => theme.color.gradient};
`;

export const Card = styled.div`
  width: 395px;
  height: 534px;

  display: flex;
  padding-bottom: 0px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
`;

export const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
`;

export const CardTitle = styled.h2`
  color: ${({ theme }) => theme.color.secondary};
  font-family: Manrope;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.24px;
`;

export const Image = styled.img`
  margin-top: 14px;

  border-radius: 20px;
  width: 395px;
  height: 252px;
`;
