import Btn from 'components/Btn/Btn';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 40px;
  padding: 0 auto 24px;
  background-color: ${p => p.theme.color.background};
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

export const Wrap = styled.div`
  position: relative;
  margin-top: 18px;
  border-radius: 20px;
  @media screen and (min-width: 768px) {
    margin-top: 24px;
    display: flex;
    flex-direction: row-reverse;
    border-radius: 40px;
  }
  @media screen and (min-width: 1280px) {
    display: block;
  }
`;
export const WrapFoto = styled.div`
  position: relative;
  padding: 20px 49px 43px;
  @media screen and (min-width: 768px) {
    padding: 20px 76px 66px 71px;
  }
  @media screen and (min-width: 1280px) {
    padding: 20px 106px 63px;
    display: block;
  }
`;
export const Avatar = styled.img`
  width: 182px;
  height: 182px;
  border-radius: 40px;
`;
export const WrapInfo = styled.form`
  padding: 0 8px;
  @media screen and (min-width: 768px) {
    padding: 24px 0 20px 20px;
  }
  @media screen and (min-width: 1280px) {
    padding: 0 24px 20px 16px;
    display: block;
  }
`;
export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  @media screen and (min-width: 768px) {
    margin-bottom: 10px;
  }
`;
export const TextTitle = styled.label`
  width: 74px;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.56px;
  @media screen and (min-width: 768px) {
    width: 100px;
    font-size: 18px;
    letter-spacing: 0.72px;
  }
`;
export const Text = styled.input`
  width: 190px;
  padding: 4px 12px;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.48px;
  box-sizing: border-box;
  border-radius: 20px;
  border: 1px solid ${p => p.theme.color.btnDark};
  @media screen and (min-width: 768px) {
    width: 230px;
    font-size: 16px;
    letter-spacing: 0.64px;
  }
  @media screen and (min-width: 1280px) {
    width: 255px;
  }
`;
export const StyledBtnSave = styled(Btn)`
  width: 190px;
  padding: 4px 12px;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.48px;
  margin-left: auto;
  box-sizing: border-box;
  border-radius: 20px;
  border: 1px solid ${p => p.theme.color.btnDark};
  background-color: ${p => p.theme.color.btnDark};
  color: ${p => p.theme.color.background};
  @media screen and (min-width: 768px) {
    width: 230px;
    font-size: 16px;
    letter-spacing: 0.64px;
  }
  @media screen and (min-width: 1280px) {
    width: 255px;
  }
`;
export const StyledBtnEdit = styled(Btn)`
  ${({ isEdit }) => isEdit && `display: none;`};
  z-index: 2;
  position: absolute;
  top: 14px;
  right: 14px;
  border: none;
  @media screen and (min-width: 768px) {
    top: 18px;
    right: 18px;
  }
`;
export const StyledLabel = styled.label`
  ${({ isEdit }) => !isEdit && `display: none;`};
  /* border: none;
  @media screen and (min-width: 768px) {
    top: 18px;
    right: 18px;
  } */
`;

export const StyledBtn = styled(Btn)`
  margin-top: 8px;
  padding-left: 2px;
  gap: 12px;
  flex-direction: row-reverse;
  font-weight: 500;
  border: none;
  color: ${p => p.theme.color.btnLogOut};
  @media screen and (min-width: 768px) {
    margin-top: 4px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 14px;
  }
`;
export const ErrorMessage = styled.div`
  color: ${p => p.theme.color.error};
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;
