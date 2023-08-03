import styled from 'styled-components';

export const NoticeItem = styled.div`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 288px;
`;

export const Header = styled.div`
  background: url('${props => props.img.photoUrl}');
  background-repeat: no-repeat;
  background-size: 288px 288px;
  background-position: center;
  background-size: cover;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  gap: 16px;
  height: 288px;

  @media screen and (min-width: 768px) {
    height: 288px;
  }
  @media screen and (min-width: 1280px) {
    height: 100%;
  }
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

  &:hover {
    cursor: pointer;
    > svg {
      fill: #54adff;
    }
  }
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

  &:hover {
    background: ${({ theme }) => theme.color.gradient};
    color: ${({ theme }) => theme.color.background};
    cursor: pointer;
  }
`;

export const BtnStyledWithIcon = styled(BtnStyled)`
  align-items: center;
  display: flex;
  gap: 8px;
  justify-content: center;
`;

export const InformationItem = styled.div`
  font-family: Manrope;
  font-size: 12px;
  font-weight: 600;
  align-items: center;
  background: #cce4fb;
  border-radius: 16px;
  display: flex;
  gap: 4px;
  padding: 2px 5px;
  width: 70px;
  text-overflow: ellipsis;
  white-space: nowrap;
  > span {
    flex: 1;
    text-overflow: ellipsis;
    overflow: hidden;
  }
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
  background: #cce4fb;
  border-radius: 0 12px 12px 0;
  color: #111;
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

export const DeletePet = styled.button`
  display: block;
  fill: transparent;
  stroke: #54adff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  align-self: flex-end;

  background: #cce4fb;
  border: transparent;
  border-radius: 50%;

  cursor: pointer;
  &:hover {
    background: #54adff;
    > svg {
      fill: white;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  cursor: pointer;
`;
