import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import { Suspense, useState } from 'react';
import { ContainerLayout, StuledContainer } from './SharedLayout.style';
import { Helmet } from 'react-helmet';
import { useAuth } from 'hooks';
import theme from 'components/theme';
import { Container } from 'components/Container/Container';

const SharedLayout = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { currentTheme } = useAuth();

  const closeMenu = e => {
    if (
      e.target.id !== 'btnNavMenu' &&
      e.target.id !== 'navMenu' &&
      e.target.id !== 'navContainer'
    ) {
      setIsOpenMenu(false);
    }
  };

  return (
    <>
      <ContainerLayout isOpenMenu={isOpenMenu} onClick={closeMenu}>
        <Helmet>
          <style>{`body { background-color: ${theme[currentTheme].color.bodyColor}; }`}</style>
        </Helmet>
        <AppBar isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu} />
        <StuledContainer>
          <Container>
            <Suspense fallback={null}>
              <Outlet />
            </Suspense>
          </Container>
        </StuledContainer>
      </ContainerLayout>
    </>
  );
};

export default SharedLayout;
