import Btn from 'components/Btn/Btn';
import styled from 'styled-components';

export const WrapFoto = styled.div`
  padding: 16px 20px 20px;
  @media screen and (min-width: 768px) {
    padding: 20px;
  }
  @media screen and (min-width: 1280px) {
    padding: 20px;
  }
`;
export const Avatar = styled.div`
  width: 240px;
  height: 240px;
  border-radius: 20px;
  @media screen and (min-width: 768px) {
    width: 128px;
    height: 128px;
  }
  @media screen and (min-width: 1280px) {
    width: 161px;
    height: 161px;
    border-radius: 40px;
  }
`;
export const Foto = styled.img`
  object-fit: cover;
  height: 100%;
`;

export const WrapInfo = styled.div`
  position: relative;
  width: 100%;
  padding: 0 20px 40px;
  @media screen and (min-width: 768px) {
    padding: 20px 20px 20px 0;
  }
  @media screen and (min-width: 1280px) {
    padding: 20px 20px 20px 0;
    display: block;
  }
`;
export const InfoItem = styled.div`
  /* width: 100%; */
  margin-bottom: 12px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.56px;
  display: flex;
  @media screen and (min-width: 768px) {
    line-height: 18px;
    margin-bottom: 16px;
  }
  @media screen and (min-width: 1280px) {
    line-height: 22px;
    margin-bottom: 12px;
  }
`;
export const TextTitle = styled.span`
  font-weight: 700;
  @media screen and (min-width: 768px) {
    font-weight: 600;
  }
`;
export const Text = styled.p`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    /* width: 255px; */
  }
`;

export const StyledBtn = styled(Btn)`
  cursor: pointer;
  position: absolute;
  padding-left: 2px;
  top: 0;
  right: 16px;
  border: none;
  @media screen and (min-width: 768px) {
    top: 20px;
    right: 20px;
  }
`;
