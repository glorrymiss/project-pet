import { Container } from 'components/Container/Container';
import Filter from 'components/Filter/Filter';
import FormSearch from 'components/FormSearch/FormSearch';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import Pagination from 'components/Pagination/Pagination';
import Title from 'components/Title/Title';
import theme from 'components/theme';
import { useAuth } from 'hooks';
import { Helmet } from 'react-helmet';
import { NavLink, Outlet } from 'react-router-dom';

const NoticesPage = () => {
  const { currentTheme } = useAuth();
  return (
    <Container>
      <Helmet>
        <title>Find pet</title>
      </Helmet>

      <Title color={theme[currentTheme].color.secondary}>
        Find your favorite pet
      </Title>

      <FormSearch />

      <div>
        <NoticesCategoriesNav />
        <div>
          <Filter />
          <NavLink to="/add-pet">Add Pet</NavLink>
        </div>
      </div>

      <Outlet />

      <Pagination />
    </Container>
  );
};

export default NoticesPage;
