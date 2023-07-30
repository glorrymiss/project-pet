import styled from 'styled-components';

export const NewsContainer = styled.ul`
  // flex-grow: 1;

  padding-top: 24px;

  display: grid;
  // grid-template-columns: 1fr 1fr 1fr;
  // column-gap: 31px;
  row-gap: 24px;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    flex-grow: 1;

    padding-top: 60px;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 31px;
    row-gap: 24px;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }
`;

export const NewsItem = styled.li``;

export const Rectangle = styled.div`
  width: 100%;
  height: 8px;
  flex-shrink: 0;
  border-radius: 40px;

  background: ${({ theme }) => theme.color.gradient};
`;

export const Card = styled.div`
  margin-top: 12px;
  padding-bottom: 12px;
  // width: 395px;
  // height: 578px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  // align-items: flex-start;
  gap: 16px;

  border-radius: 20px;

  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    height: 534px;
  }
`;

export const WrapperImage = styled.div`
  display: table;
  height: 252px;
  overflow: hidden;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
  border-radius: 20px;

  height: 252px;
  object-fit: cover;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    margin-top: 14px;
  }
`;

export const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  height: 100%;

  // padding-bottom: 12px;

  // @media screen and (min-width: 768px) {
  // }

  // @media screen and (min-width: 1280px) {
  // }
`;

export const Description = styled.div`
  // height: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  padding: 0 12px;
  // box-sizing: border-box;
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
