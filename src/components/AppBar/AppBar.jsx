import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { StyledAppBar } from './AppBar.styled';
import Logo from 'components/Logo/Logo';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <StyledAppBar>
      <Logo />
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </StyledAppBar>
  );
};
