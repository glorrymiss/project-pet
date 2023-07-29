import IconCrossSmall from 'images/icons/IconCrossSmall';
import { Wrapper, Text, Btn } from './FilterReference.styled';

const ReferenceFilter = ({ text, clickHandler }) => {
  return (
    <Wrapper>
      <Text>{text}</Text>
      <Btn type="button" onClick={clickHandler}>
        <IconCrossSmall />
      </Btn>
    </Wrapper>
  );
};

export default ReferenceFilter;
