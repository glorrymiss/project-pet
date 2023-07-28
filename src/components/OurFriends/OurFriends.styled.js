import styled from 'styled-components'

export const List = styled.ul`
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    flex-direction: column;
    gap: 20px;
    margin: 24px auto 75px;
    @media screen and (min-width: 768px) {
        /* padding: 0 32px; */
        flex-direction: row;
        gap:32px;
        margin: 40px 32px 172px;
    }
    @media screen and (min-width: 1280px) {
        align-items:baseline;
        margin: 60px 16px 69px;
  }

`

export const Item = styled.li`
    /* padding-top: 16px;
    padding-left:12px; */
    height:240px;
    width:280px;
    display:flex;
    flex-direction: column;
    background-color:#fff;
    box-shadow:${({ theme }) => theme.boxShadow};
    border-radius:40px; 
    @media screen and (min-width: 768px) {
        height:275px;
        width:320px;
        flex-basis: calc((100% - 32px) / 2);
    } 
    @media screen and (min-width: 1280px) {
        height:287px;
        width:394px;
        flex-basis: calc((100% - 64px) / 3);
  }
`

export const CardTitle = styled.h2`
margin:16px auto;
text-align: center;
font-size: 20px;
font-weight: 700;
line-height: normal;
color:${({ theme }) => theme.color.btnDark};
`
export const WrapImage = styled.div`
margin-left:12px;
width: 100px;
height: 68px;
@media screen and (min-width: 768px) {
    width: 124px;
    height: 88px;
    }
@media screen and (min-width: 1280px) {
    width: 146px;
    height: 104px;
  }
`

export const Image = styled.img`
display: block;
max-width: 100%;
height: auto;
`

export const MainWrap = styled.div`
display: flex;
gap:12px;
@media screen and (min-width: 1280px) {
    gap:20px;
  }
`
export const TextWrap = styled.div`
display:flex;
flex-direction: column;
gap: 12px;
@media screen and (min-width: 768px) {
    gap: 16px;
    }
    @media screen and (min-width: 1280px) {
    gap:12px;
  }
    
`
export const Text = styled.p`
color: ${({ theme }) => theme.color.secondary};

font-size: 12px;
font-weight: 600;
line-height: normal;
@media screen and (min-width: 768px) {
    font-size: 14px;
    }
@media screen and (min-width: 1280px) {
   font-size:16px;
  }
    `

export const Link = styled.a`
color: ${({ theme }) => theme.color.secondary};
text-decoration:none;
font-size: 12px;
font-weight: 400;
line-height: normal;
:hover{
    color: ${({ theme }) => theme.color.btnDark}
}
@media screen and (min-width: 768px) {
    font-size: 14px;
    }
@media screen and (min-width: 1280px) {
   font-size:16px;
  }
`


export const ListTime = styled.ul`
 /* ${({ openList }) =>
      openList ?
      "display: none" :
      "display: block"}; */
      
cursor: pointer;    
position:relative;
border:none;
font-size: 12px;
font-weight: 400;
line-height: normal;
color: ${({ theme }) => theme.color.secondary};
outline: none;
:hover{
    color: ${({ theme }) => theme.color.btnDark}
}
@media screen and (min-width: 768px) {
    font-size: 14px;
    }
@media screen and (min-width: 1280px) {
   font-size:16px;
  }
`

export const TimeItem = styled.li`
/* border:none; */
font-size: 12px;
font-style: normal;
font-weight: 500;
line-height: normal;
color: ${({ theme }) => theme.color.secondary};
/* outline: none; */
:hover{
    background-color: ${({ theme }) => theme.color.btnDark}
}
`

export const TimeWrap =styled.div`
position: absolute;
background-color: white;
border: 1px solid ${({ theme }) => theme.color.btnDark};
padding:12px;
display:flex;
gap:6px;
border-radius: 8px;
box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
`