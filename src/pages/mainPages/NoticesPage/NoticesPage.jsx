import Btn from 'components/Btn/Btn';
// import { Container } from 'components/Container/Container';
import Filter from 'components/Filter/Filter';
import FormSearch from 'components/FormSearch/FormSearch';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import { Pagination } from 'components/Pagination/Pagination';
import Title from 'components/Title/Title';
import theme from 'components/theme';
import { useAuth } from 'hooks';
import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router-dom';
import { FlexBox } from './NoticesPage.styled';

const NoticesPage = () => {
  const { currentTheme } = useAuth();

  const handleClickAddPet = () => {
    console.log('handleClickAddPet');
  };

  return (
    <FlexBox>
      <Helmet>
        <title>Find pet</title>
      </Helmet>

      <Title color={theme[currentTheme].color.secondary}>
        Find your favorite pet
      </Title>

      <FormSearch />

      <div
        style={{
          marginTop: 43,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <NoticesCategoriesNav />
        <div style={{ display: 'flex', columnGap: 12 }}>
          <Filter />
          {/* <NavLink to="/add-pet">Add Pet</NavLink> */}
          <Btn
            text="Add Pet"
            icon="IconPlusSmall"
            onClick={handleClickAddPet}
            size="small"
          />
        </div>
      </div>

      <Outlet />

      <Pagination />
    </FlexBox>
  );
};

export default NoticesPage;
