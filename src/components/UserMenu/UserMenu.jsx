import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { UserName, Wrapper } from './UserMenu.styled';
import IconUser from 'images/icons/IconUser';
import theme from 'components/theme';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user, currentTheme } = useAuth();

  return (
    <Wrapper>
      <IconUser fill={theme[currentTheme].color.primary} />
      <UserName>{user.name}</UserName>
      <button onClick={() => dispatch(logOut())}>Logout</button>
    </Wrapper>
  );
};
