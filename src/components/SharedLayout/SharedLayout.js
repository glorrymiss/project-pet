import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';
import { ContainerLayout } from './SharedLayout.style';

const SharedLayout = () => {
  return (
    <ContainerLayout>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </ContainerLayout>
  );
};

export default SharedLayout;
