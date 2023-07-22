import { StyleBtn } from './Btn.style';
import theme from 'components/theme';
import { useAuth } from 'hooks';
import ListIcons from 'images/icons/ListIcons';
import { useState } from 'react';

const Btn = ({
  size = 'middle',
  transparent = false,
  icon,
  text,
  className,
}) => {
  const [isHover, setIsHover] = useState(false);
  const { currentTheme } = useAuth();

  // let fill = 'null';

  // if (isHover) {
  //   fill = theme[currentTheme].color.background;
  // } else
  //   fill = !transparent
  //     ? theme[currentTheme].color.background
  //     : theme[currentTheme].color.btnDark;

  const fill = !transparent
    ? theme[currentTheme].color.background
    : theme[currentTheme].color.btnDark;

  return (
    <StyleBtn
      onMouseEnter={e => setIsHover(true)}
      onMouseLeave={e => setIsHover(false)}
      size={size}
      transparent={transparent}
      className={className}
    >
      {text}
      {icon && ListIcons(fill, icon)}
    </StyleBtn>
  );
};

export default Btn;
