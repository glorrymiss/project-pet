import styled from 'styled-components';

export const WrapperForm = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 28px;
  color: #111111;
`;

export const PointBlock = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;

export const SexContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  gap: 12px;
  color: #d9d2d2;
  background-color: transparent;
`;

export const SexPhotoBlock = styled.div`
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    margin-right: 56px;
  }

  @media screen and (min-width: 1025px) {
    display: flex;
    flex-direction: column;
    margin-right: 72px;
  }
`;

export const LabelSex = styled.p`
  color: #111111;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.36;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const SexBlock = styled.ul`
  display: flex;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const SexButton = styled.button`
  display: flex;
  background-color: inherit;
  cursor: pointer;
  border: none;
  color: #888888;
  font-size: 14px;
  justify-content: center;
  flex-direction: row;
  padding-left: 0;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding-right: 12px;
  }
`;

export const SexButtonActive = styled.button`
  display: flex;
  background-color: inherit;
  cursor: pointer;
  border: none;
  color: #54adff;
  font-size: 14px;
  justify-content: center;
  flex-direction: row;
  padding-left: 0;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding-right: 12px;
  }
`;

export const ErrorSex = styled.p`
  position: absolute;
  bottom: 5%;
  left: 5%;
  font-weight: 400;
  font-size: 10px;
  line-height: 1.36px;
  color: #f43f5e;

  @media screen and (min-width: 768px) {
    bottom: 25%;
    font-size: 12px;
  }
`;

export const PhotoContainerSell = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 16px;
  margin-left: 8px;
  margin-top: 8px;
  position: relative;

  @media screen and (min-width: 768px) {
    flex-direction: column;
  }
`;

export const LabelAddPhoto = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.33;
  color: #111111;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    display: block;
    margin-bottom: 2px;
    width: 115px;
    overflow: wrap;
  }
`;

export const LabelPhoto = styled.div`
  width: 112px;
  height: 112px;
  background-color: #cce4fb;
  border-radius: 20px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    width: 182px;
    height: 182px;
    border-radius: 40px;
  }
`;

export const PreviewPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 182px;
    height: 182px;
    border-radius: 40px;
  }
`;

export const ErrorTextLowSell = styled.p`
  position: absolute;
  font-size: 10px;
  bottom: -10%;
  left: 15%;
  color: #f43f5e;

  @media screen and (min-width: 768px) {
    font-size: 12px;
    left: 8%;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 16px;
  margin-left: 8px;
  position: relative;

  @media screen and (min-width: 768px) {
    margin-bottom: 38px;
    gap: 8px;
  }
`;

export const Label = styled.label`
  color: #111111;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.36;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const Input = styled.input`
  border-radius: 40px;
  color: #888888;
  font-size: 14px;
  padding: 8px 16px;
  border: 1px solid #54adff;
  max-width: 242px;

  &:not(:last-child) {
    margin-bottom: 16px;
  }

  &:focus {
    border-color: #00c3ad;
  }

  @media screen and (min-width: 768px) {
    min-width: 396px;
    font-size: 16px;
    padding: 12px;
  }
`;

export const ErrorTextLostLocation = styled.p`
  position: absolute;
  bottom: 60%;
  left: 10%;
  font-weight: 400;
  font-size: 10px;
  line-height: 1.36px;
  color: #f43f5e;

  @media screen and (min-width: 768px) {
    bottom: 70%;
    left: 5%;
    font-size: 12px;
  }
`;

export const LabelCommentsSell = styled.label`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.33px;
  color: #111111;
  margin-bottom: 8px;
  margin-top: 12px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const InputCommentsLost = styled.textarea`
  width: 242px;
  height: 80px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  padding: 12px 16px;
  border: 1px solid #54adff;
  border-radius: 20px;
  resize: none;
  outline: none;

  @media screen and (min-width: 768px) {
    width: 396px;
    height: 184px;
    font-size: 16px;
  }
`;

export const ErrorCommentSell = styled.p`
  position: absolute;
  bottom: -5%;
  left: 10%;
  font-weight: 400;
  font-size: 10px;
  line-height: 1.36px;
  color: #f43f5e;

  @media screen and (min-width: 768px) {
    position: absolute;
    bottom: -5%;
    left: 5%;
    font-size: 12px;
  }
`;

export const PhotoContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 24px;
  margin-left: 8px;
  position: relative;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`;

export const ErrorTextLow = styled.p`
  position: absolute;
  bottom: -5%;
  right: 76%;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #f43f5e;

  @media screen and (min-width: 768px) {
    bottom: 25%;
  }
`;

export const ErrorComment = styled.p`
  position: absolute;
  bottom: -20%;
  left: 5%;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #f43f5e;
`;

export const CommentsContainerMyPet = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 14px;
  margin-right: 8px;
  margin-left: 8px;

  @media screen and (min-width: 768px) {
    margin-bottom: 4px;
    margin-right: 8px;
  }
`;

export const LabelComments = styled.label`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.33px;
  color: #111111;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const InputComments = styled.textarea`
  width: 242px;
  height: 80px;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  padding: 12px 16px;
  border: 1px solid #54adff;
  border-radius: 20px;
  resize: none;
  outline: none;

  @media screen and (min-width: 768px) {
    width: 396px;
    height: 80px;
    font-size: 16px;
  }
`;

export const WrapForm = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ErrorTextPrice = styled.p`
  position: absolute;
  bottom: 44%;
  left: 10%;
  font-weight: 400;
  font-size: 10px;
  line-height: 1.36px;
  color: #f43f5e;

  @media screen and (min-width: 768px) {
    bottom: 38%;
    left: 5%;
    font-size: 12px;
  }
`;

export const ErrorTextSellLocation = styled.p`
  position: absolute;
  bottom: 72%;
  left: 10%;
  font-weight: 400;
  font-size: 10px;
  line-height: 1.36px;
  color: #f43f5e;

  @media screen and (min-width: 768px) {
    bottom: 70%;
    left: 5%;
    font-size: 12px;
  }
`;
