import styled from 'styled-components';

export const PaginationWrp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PaginationList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  box-shadow: gray;
  border-radius: 45px;
  padding: 8px 16px 9px 14px;
  width: 280px;
  @media screen and (min-width: 768px) {
    width: 310px;
    padding: 8px 11px 9px 12px;
  }
`;

export const PaginationListItem = styled.li``;

export const PaginationBtn = styled.button`
  outline: none;
  border: 1px solid lightblue;
  color: black;
  background-color: transparent;
  display: inline-flex;
  width: 35px;
  height: 35px;
  cursor: pointer;

  justify-content: center;
  align-items: center;
  border-radius: 50%;
  &:hover,
  :focus {
    color: white;
    background-color: #54adff;
  }
`;

export const PaginationBtnActive = styled(PaginationBtn)`
  border-color: #54adff;
  background-color: #54adff;
  color: white;
`;

export const PaginationArrowBtn = styled(PaginationBtn)`
  color: #54adff;
  border-color: #54adff;
  &:hover,
  :focus {
    color: white;
    background-color: lightskyblue;
  }
`;
