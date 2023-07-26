import Btn from 'components/Btn/Btn';
import styled from 'styled-components';

export const NotiveItem = styled.div`
    flex: 1 0 calc(25% - 32px);
`;

export const Header = styled.div`
    background: no-repeat url(${props => props.img.default});
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 200px;
    padding: 10px;
`;

export const Top = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
`

export const Status = styled.div`
    background: #CCE4FB;
    border-radius: 0 12px 12px 0;
    padding: 10px 15px;
    position: relative;

    &::after {
        background: #CCE4FB;
        bottom: 0;
        content: '';
        left: -10px;
        position: absolute;
        top: 0;
        width: 10px;
    }
`

export const Favorite = styled.div`
    background: #CCE4FB;
    border-radius: 50%;
    padding: 8px;
`

export const Information = styled.div`
    display: flex;
    justify-content: space-around;
`

export const BtnStyled = styled(Btn)`
     border: none;
     margin-left: auto;
     padding: 0;
`;

export const InformationItem = styled.div`
    align-items: center;
    background: #CCE4FB;
    border-radius: 16px;
    display: flex;
    gap:4px;
    padding: 2px 10px
`

export const Footer = styled.div`
    border-radius: 0 0 40px 40px;
    box-shadow: 2px 8px 14px rgba(136, 198, 253, 0.19);
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
`

export const LearnMore = styled.button`
    background: transparent;
    border: 2px solid #54ADFF;  
    border-radius: 40px;  
    color: #54ADFF;
    padding: 8px 0;
`
