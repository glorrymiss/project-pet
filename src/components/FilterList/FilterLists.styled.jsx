import styled from 'styled-components';

const List = styled.div`
  padding-right: 4px;

  background-color: ${({ theme }) => theme.color.btnLight};
  border-radius: 20px;
`;

const ListBtn = styled.button`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;

  width: 100%;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 8px;

  font-size: 14px;
  color: ${({ theme }) => theme.color.btnDark};

  background-color: transparent;
  border: none;
  border-radius: 20px;

  & svg {
    stroke: ${({ theme }) => theme.color.btnDark};
  }
`;

const AgeSubList = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 100%;
  height: ${({ isShown }) => (isShown ? '104px' : 0)};
  padding-top: ${({ theme, isShown }) => (isShown ? '4px' : 0)};
  padding-left: 14px;

  overflow: hidden;

  transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1);
`;

const GenderSubList = styled(AgeSubList)`
  height: ${({ isShown }) => (isShown ? '75px' : 0)};
`;

const ItemText = styled.label`
  position: relative;

  display: flex;
  align-items: center;

  width: 100%;
  min-height: 24px;
  padding-left: 36px;

  font-size: 12px;
  color: ${({ theme }) => theme.color.btnDark};
`;

const Icon = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  & svg {
    stroke: ${({ theme }) => theme.color.btnDark};
  }
`;

const CheckedIcon = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  & svg {
    stroke: ${({ theme }) => theme.color.btnDark};
  }
`;

const ItemCheckbox = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export {
  List,
  ListBtn,
  AgeSubList,
  GenderSubList,
  Icon,
  CheckedIcon,
  ItemText,
  ItemCheckbox,
};
