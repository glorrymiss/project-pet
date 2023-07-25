import { StyledTitel } from './Titel.styled';

const Title = ({ color, className, children }) => {
  return (
    <StyledTitel color={color} className={className}>
      {children}
    </StyledTitel>
  );
};

export default Title;
