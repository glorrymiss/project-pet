import Btn from 'components/Btn/Btn';
import styled from 'styled-components';

export const StyledSection = styled.div`
padding: 22px 0;
width: 100%;
`;
export const Title = styled.h2`
  margin: 0 auto 14px;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.96px;
  @media screen and (min-width: 768px) {
    margin: 0 auto 40px;
    font-size: 28px;
    font-weight: 700;
    letter-spacing: -0.28px;
  }
`;
export const WrapText = styled.div`
  margin: 0 auto;
  width: 240px;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.14px;
  margin-bottom: 44px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    letter-spacing: -0.16px;
    width: 393px;
  }
`;
export const Text = styled.p`
  @media screen and (min-width: 768px) {
   padding: 0 10px;
  }
`;
export const Span = styled.span`
display: block;
  font-weight: 700;
  @media screen and (min-width: 768px) {
	display: inline;
  }
`;

export const WrapBtn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 17px;
    justify-content: center;
  }
`;
export const StyledBtn = styled(Btn)`
  background-color: ${p => p.theme.color.background};
  color: ${p => p.theme.color.btnDark};
  width: 256px;
  height: 40px;
  padding: 0;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 129px;
    height: 40px;
    margin: 0;
  }
`;
export const StyledBtnYes = styled(StyledBtn)`
  color: ${p => p.theme.color.background};
  background-color: ${p => p.theme.color.btnDark};
  gap: 8px;
`;
