import Btn from 'components/Btn/Btn';
import styled from 'styled-components';

export const StyledSection = styled.div`
padding: 63px 0 32px;
width: 100%;
`;
export const Title = styled.h2`
  margin: 0 auto 44px;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.96px;
  @media screen and (min-width: 768px) {
    margin: 0 auto 48px;
    font-size: 36px;
    letter-spacing: 1.44px;
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
  cursor: pointer;
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
