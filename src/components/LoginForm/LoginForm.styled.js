import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import { Form, Field } from 'formik';

export const FormStyled = styled(Form)`
width: 608px;
margin: auto;
display:flex;
flex-direction:column;
align-items: center;
justify-content: center;
padding: 60px 75px;
border-radius: 40px;
margin-top: 80px;

background-color: rgba(255, 255, 255, 1);

box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
`
export const Wrap = styled.div`
display: flex;
flex-direction:column;
gap:32px;
margin-bottom: 60px;
`

export const Title = styled.h2`
text-align: center;
font-size: 36px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-bottom:40px;
`

export const FieldStyled = styled(Field)`
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 1.5;
letter-spacing: 0.64px;
padding: 12px 16px;
width:458px;
border-radius: 40px;
border: 1px solid #54ADFF;

/* background-color:rgba(255, 255, 255, 1); */

color: #888;`

export const Button = styled.button`
display: flex;
width: 478px;
height: 48px;
padding: 10px 28px;
justify-content: center;
align-items: center;
border-radius: 40px;
font-size: 20px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: 0.8px;
border: transparent;
margin-bottom: 20px;

color:rgba(255, 255, 255, 1);
background-color: #54ADFF;
`

export const StyledNavLink = styled(NavLink)`
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 0.48px;
text-decoration-line: underline;

color: #54ADFF;
`

export const Text = styled.p`
text-align: center;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 0.48px;

color: #888;
`

export const TextError = styled.div`
font-size: 12px;
line-height: 1.3;
font-weight: 400;
color:rgba(244, 63, 94, 1);
`

