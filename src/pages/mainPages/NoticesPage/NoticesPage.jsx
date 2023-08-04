// import Btn from 'components/Btn/Btn';
// import { Container } from 'components/Container/Container';
import Filter from 'components/Filter/Filter';
import FormSearch from 'components/FormSearch/FormSearch';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
// import { Pagination } from 'components/Pagination/Pagination';
import Title from 'components/Title/Title';
import theme from 'components/theme';
import { useAuth } from 'hooks';
import { Helmet } from 'react-helmet';
import { Navigate, Outlet, useParams } from 'react-router-dom';
import {
  BtnAddPet,
  BtnAddPetMob,
  FiltersContainer,
  FlexBox,
  WrapperFilter,
} from './NoticesPage.styled';

import IconPlus from 'images/icons/IconPlus';

const NoticesPage = () => {
  const { currentTheme } = useAuth();

  const { categoryName } = useParams();

  if (!categoryName) {
    return <Navigate to="/notices/sell" />;
  }

  return (
    <FlexBox>
      <Helmet>
        <title>Find pet</title>
      </Helmet>

      <Title color={theme[currentTheme].color.secondary}>
        Find your favorite pet
      </Title>

      <FormSearch />

      <FiltersContainer>
        <NoticesCategoriesNav />
        <WrapperFilter>
          <Filter />
          <BtnAddPet to="/add-pet">
            Add Pet <IconPlus fill={theme[currentTheme].color.bodyColor} />
          </BtnAddPet>
          <BtnAddPetMob to="/add-pet">
            Add Pet <IconPlus fill={theme[currentTheme].color.bodyColor} />
          </BtnAddPetMob>
        </WrapperFilter>
      </FiltersContainer>

      <Outlet />
    </FlexBox>
  );
};

export default NoticesPage;
