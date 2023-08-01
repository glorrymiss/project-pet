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
import NoticesCategoriesList from './NoticesCategoriesList/NoticesCategoriesList';

// import MainPage from 'pages/mainPages/MainPage';
// import NoticesPage from 'pages/mainPages/NoticesPage';
// import OurFriendsPage from 'pages/mainPages/OurFriendsPage';
// import UserPage from 'pages/mainPages/UserPage';
// import AddPetPage from 'pages/AddPetPage';

const RegisterPage = lazy(() => import('../pages/authPages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/authPages/LoginPage'));
const NewsPage = lazy(() => import('../pages/mainPages/NewsPage/NewsPage'));
const MainPage = lazy(() => import('../pages/mainPages/MainPage'));
const NoticesPage = lazy(() =>
  import('../pages/mainPages/NoticesPage/NoticesPage')
);
const OurFriendsPage = lazy(() =>
  import('../pages/mainPages/OurFriendsPage/OurFriendsPage')
);
const UserPage = lazy(() =>
  import('../pages/secondaryPages/UserPage/UserPage')
);
const AddPetPage = lazy(() =>
  import('../pages/secondaryPages/AddPetPage/AddPetPage')
);
const NotFoundPage = lazy(() => import('../pages/mainPages/NotFoundPage'));
const TeamPage = lazy(() => import('../pages/mainPages/TeamPage/TeamPage'));

export const App = () => {
  const [currentTheme, setCurrentTheme] = useState('light');
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    setCurrentTheme('light');
  }, []);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <ThemeProvider theme={theme[currentTheme]}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/notices" element={<NoticesPage />}>
            <Route index element={<NoticesCategoriesList />} />
            {/* <Route path="sell" element={<NoticesCategoriesList />} /> */}
            <Route path=":categoryName" element={<NoticesCategoriesList />} />
            {/* <Route path="sell" element={<div>sell</div>} />
            <Route path="lost-found" element={<div>lost/found</div>} />
            <Route path="for-free" element={<div>in good hands</div>} />
            <Route path="favorite" element={<div>favorite ads</div>} />
            <Route path="own" element={<div>my ads</div>} /> */}
          </Route>
          <Route path="/friends" element={<OurFriendsPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/user" component={<LoginPage />} />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/user"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/user"
            element={
              <PrivateRoute
                redirectTo="/login"
                redirectBack="/user"
                component={<UserPage />}
              />
              // <PrivateRoute redirectTo="/login" component={<UserPage />} />
            }
          />
          <Route
            path="/add-pet"
            element={
              <PrivateRoute
                redirectTo="/login"
                redirectBack="/add-pet"
                component={<AddPetPage />}
              />
              // <PrivateRoute redirectTo="/login" component={<UserPage />} />
            }
          />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
