import styled from 'styled-components';

export const NotiveItem = styled.div`
  flex: 1 0 calc(25% - 32px);
`;

export const Header = styled.div`
  background: url('${props => props.img.photoUrl}');
  background-repeat: no-repeat;
  background-size: 288px 288px;
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
`;

export const Status = styled.div`
  background: #cce4fb;
  border-radius: 0 12px 12px 0;
  padding: 10px 15px 10px 8px;
  position: relative;

  &::after {
    background: #cce4fb;
    bottom: 0;
    content: '';
    left: -10px;
    position: absolute;
    top: 0;
    width: 10px;
  }
`;

export const Favorite = styled.button`
  background: #cce4fb;
  border: none;
  border-radius: 50%;
  display: flex;
  padding: 8px;
`;

export const Information = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const BtnStyled = styled.a`
  background: ${props => props.bg ?? 'transparent'};
  border: 2px solid #54adff;
  border-radius: 40px;
  color: ${props => props.color ?? '#fff'};
  letter-spacing: 0.04em;
  padding: 8px 24px;
`;

export const BtnStyledWithIcon = styled(BtnStyled)`
  align-items: center;
  display: flex;
  gap: 8px;
  justify-content: center;
`;

export const InformationItem = styled.div`
  align-items: center;
  background: #cce4fb;
  border-radius: 16px;
  display: flex;
  gap: 4px;
  padding: 2px 10px;
`;

export const Footer = styled.div`
  border-radius: 0 0 40px 40px;
  box-shadow: 2px 8px 14px rgba(136, 198, 253, 0.19);
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

export const LearnMore = styled.button`
  background: transparent;
  border: 2px solid #54adff;
  border-radius: 40px;
  color: #54adff;
  padding: 8px 0;
`;

export const ModalHeader = styled.div`
  display: flex;
  gap: 24px;
`;

export const ModalPhoto = styled.div`
  border-radius: 0 0 40px 40px;
  overflow: hidden;
  position: relative;
`;

export const ModalStatus = styled.span`
    background: #CCE4FB;
    border-radius: 0 12px 12px 0;
    color: #111
    left: 0;
    padding: 12px;
    position: absolute;
    top: 16px;
`;

export const ModalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ModalPersonality = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ModalPersonalityField = styled.div`
  display: flex;
`;

export const ModalPersonalityKey = styled.p`
  font-weight: 600;
  flex: 0 0 30%;
`;

export const ModalPersonalityValue = styled.p`
  flex: 1;
`;

export const ModalPersonalityLink = styled.a`
  color: #ffc107;
`;

export const ModalComments = styled.div`
  letter-spacing: 0.04em;
`;

export const ModalButtons = styled.div`
  display: flex;
  gap: 20px;
  margin-left: auto;
`;
