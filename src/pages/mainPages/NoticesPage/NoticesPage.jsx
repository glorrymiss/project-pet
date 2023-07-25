import { Container } from 'components/Container/Container';
import Filter from 'components/Filter/Filter';
import FormSearch from 'components/FormSearch/FormSearch';
import Pagination from 'components/Pagination/Pagination';
import { Helmet } from 'react-helmet';
import { NavLink, Outlet } from 'react-router-dom';

const NoticesPage = () => {
  return (
    <Container>
      <Helmet>
        <title>Find pet</title>
      </Helmet>

      <h1>Find your favorite pet</h1>

      <FormSearch />

      <div>
        <div>
          <NavLink to="sell">sell</NavLink>
          <NavLink to="lost-found">lost/found</NavLink>
          <NavLink t0="for-free">in good hands</NavLink>
          <NavLink to="favorite">favorite ads</NavLink>
          <NavLink to="own">my ads</NavLink>
        </div>
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
