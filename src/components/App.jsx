import { useEffect, lazy, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

import SharedLayout from './SharedLayout/SharedLayout';

// import MainPage from 'pages/mainPages/MainPage';
// import NoticesPage from 'pages/mainPages/NoticesPage';
// import OurFriendsPage from 'pages/mainPages/OurFriendsPage';
// import UserPage from 'pages/mainPages/UserPage';
// import AddPetPage from 'pages/AddPetPage';

const RegisterPage = lazy(() => import('../pages/authPages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/authPages/LoginPage'));
const NewsPage = lazy(() => import('../pages/mainPages/NewsPage'));
const MainPage = lazy(() => import('../pages/mainPages/MainPage'));
const NoticesPage = lazy(() => import('../pages/mainPages/NoticesPage'));
const OurFriendsPage = lazy(() => import('../pages/mainPages/OurFriendsPage'));
const UserPage = lazy(() => import('../pages/secondaryPages/UserPage'));
const AddPetPage = lazy(() => import('../pages/secondaryPages/AddPetPage'));

export const App = () => {
  const [currentTheme, setCurrentTheme] = useState('light');
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <ThemeProvider theme={theme[currentTheme]}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          {/* <Route index element={<MainPage />} /> */}
          <Route
            path="/main"
            element={<RestrictedRoute component={<MainPage />} />}
          />
          <Route
            path="/news"
            element={<RestrictedRoute component={<NewsPage />} />}
          />
          <Route
            path="/notices"
            element={<RestrictedRoute component={<NoticesPage />} />}
          />
          <Route
            path="/friends"
            element={<RestrictedRoute component={<OurFriendsPage />} />}
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/news" component={<LoginPage />} />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/news"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/user"
            element={
              <RestrictedRoute component={<UserPage />} />
              // <PrivateRoute redirectTo="/login" component={<UserPage />} />
            }
          />
          <Route
            path="/add-pet"
            element={
              <RestrictedRoute component={<AddPetPage />} />
              // <PrivateRoute redirectTo="/login" component={<UserPage />} />
            }
          />
          {/* <Route
          path="/news"
          element={
            <RestrictedRoute redirectTo="/login" component={<NewsPage />} />
            // <PrivateRoute redirectTo="/login" component={<NewsPage />} />
          }
        /> */}
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
