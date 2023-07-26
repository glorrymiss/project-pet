import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import {
  ButtonMenu,
  NavContainer,
  StyleBtn,
  StyledAppBar,
  StyledContainer,
  UserBox,
} from './AppBar.styled';
import Logo from 'components/Logo/Logo';
import IconMenuHamburger from 'images/icons/IconMenuHamburger';
import theme from 'components/theme';
import IconCrossBig from 'images/icons/IconCross';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
// import { Container } from 'components/Container/Container';

export const AppBar = ({ isOpenMenu, setIsOpenMenu }) => {
  const dispatch = useDispatch();
  const { isLoggedIn, currentTheme } = useAuth();

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const hendlelogout = () => {
    dispatch(logOut());
  };

  return (
    <StyledAppBar>
      <StyledContainer>
        <Logo />

        <NavContainer id="navContainer" isOpenMenu={isOpenMenu}>
          <Navigation isOpenMenu={isOpenMenu} />
          <UserBox>
            {isLoggedIn && (
              <StyleBtn
                isOpenMenu={isOpenMenu}
                // transparent={true}
                // size="max"
                // size="normal"
                // size="round"
                size="small"
                // size="min"
                text={'Log out'}
                icon={'Iconlogout'}
                onClick={hendlelogout}
              />
            )}
            {isLoggedIn ? (
              <UserMenu isOpenMenu={isOpenMenu} />
            ) : (
              <AuthNav isOpenMenu={isOpenMenu} />
            )}
          </UserBox>
        </NavContainer>

        <ButtonMenu
          isOpenMenu={isOpenMenu}
          onClick={toggleMenu}
          id="btnNavMenu"
          title="close modal"
        >
          {isOpenMenu ? (
            <IconCrossBig
              pointerEvents="none"
              fill={theme[currentTheme].color.primary}
            />
          ) : (
            <IconMenuHamburger
              pointerEvents="none"
              fill={theme[currentTheme].color.primary}
            />
          )}
        </ButtonMenu>
      </StyledContainer>
    </StyledAppBar>
  );
};
