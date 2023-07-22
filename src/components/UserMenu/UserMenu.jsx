import { useAuth } from 'hooks';
import { UserName, Wrapper } from './UserMenu.styled';
import IconUser from 'images/icons/IconUser1';
import theme from 'components/theme';

export const UserMenu = () => {
  const { user, currentTheme } = useAuth();

  return (
    // <NavLink to="/main"></NavLink>
    <Wrapper to="/user">
      <IconUser fill={theme[currentTheme].color.primary} />
      <UserName>{user.name}</UserName>
    </Wrapper>
  );
};
