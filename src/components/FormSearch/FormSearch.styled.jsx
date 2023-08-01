import styled from 'styled-components';

export const StuledInput = styled.input`
  width: inherit;

  font-family: Inter;
  font-size: 14px;
  line-height: normal;
  font-weight: 400;
  letter-spacing: 0.56px;
  border:none;
  border-radius: 24px;
  box-shadow:${({ theme }) => theme.boxShadow};
  padding: 10px 12px;
  outline: none;
  background-color:${({ theme }) => theme.color.cardBG};
  :focus{
    box-shadow: ${({ theme }) => theme.boxShadowHover}
  }
  @media screen and (min-width: 768px) {
    font-size: 20px;
    letter-spacing: 0.8px;
    padding: 10px 20px;
   
  }

 
`;

export const Wrap = styled.div`
  margin-top: 24px;
  width: 100%;
  position:relative;
  display:flex;
  justify-content:space-between;
  @media screen and (min-width: 768px) {
    width: 608px;
    margin-top: 40px;
  }
`

export const IconWrap = styled.div`
  position:absolute;
  top:8px;
  right:12px;
  @media screen and (min-width: 768px) {
    top:10px;
  right:20px;
  }
`