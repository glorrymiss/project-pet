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

  border-radius: 20px;

  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
`;

export const Image = styled.img`
  margin-top: 14px;

  border-radius: 20px;
  width: 395px;
  height: 252px;
`;

export const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // align-items: flex-start;
  gap: 40px;
  height: 100%;

  padding-bottom: 12px;
`;

export const Description = styled.div`
  // height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  padding: 0 12px;
  box-sizing: border-box;
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

export const CardText = styled.p`
  text-overflow: ellipsis;
  whitespace: nowrap;
  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 12px;
  box-sizing: border-box;
`;
export const Data = styled.p``;

export const ReadMore = styled.a``;
