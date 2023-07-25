import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 16px;
  position: relative;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
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
  padding: 8px;
  border: 1px solid #54adff;
  max-width: 260px;

  &:focus {
    border-color: #00c3ad;
  }

  @media screen and (min-width: 768px) {
    min-width: 400px;
    font-size: 16px;
  }
`;

export const ErrorText = styled.p`
  position: absolute;
  bottom: -20%;
  left: 5%;
  font-weight: 400;
  font-size: 10px;
  line-height: 1.36px;
  color: #f43f5e;
`;
