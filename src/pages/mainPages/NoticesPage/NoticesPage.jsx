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
// import { useEffect, useState } from 'react';
import IconPlus from 'images/icons/IconPlus';
// import { getFavoriteNotices, getNotices } from 'services';
// import { async } from 'q';
// import { useState } from 'react';

const NoticesPage = () => {
  const { currentTheme } = useAuth();
  // const [noticesList, setNoticesList] = useState([]);
  // const [quantityNotices, setQuantityNotices] = useState(0);
  // const [page, setPage] = useState(1);
  // const [searchParams, setSearchParams] = useSearchParams();
  const { categoryName } = useParams();
  // console.log('searchValue', searchValue);

  // useEffect(() => {
  //   // if (categoryName) {
  //   if (categoryName === 'favorite') {
  //     getFavoriteNotices({
  //       page,
  //       limit: 12,
  //       search: searchValue,
  //       categoryName,
  //     }).then(res => {
  //       // console.log('res', res.data);

  //       const { totalHits, notices } = res.data;
  //       setNoticesList(notices);
  //       setQuantityNotices(totalHits);
  //     });
  //     return;
  //   }
  //   getNotices({ page, limit: 12, search: searchValue, categoryName }).then(
  //     res => {
  //       // console.log('res', res.data);

  //       const { totalHits, notices } = res.data;
  //       setNoticesList(notices);
  //       setQuantityNotices(totalHits);
  //     }
  //   );
  // }, [page, searchValue, categoryName]);

  // const getNotices = async () => {
  //   await getNotices({
  //     page,
  //     limit: 12,
  //     search: searchValue,
  //     categoryName,
  //   }).then(res => {
  //     // console.log('res', res.data);

  //     const { totalHits, notices } = res.data;
  //     setNoticesList(notices);
  //     setQuantityNotices(totalHits);
  //     return notices;
  //   });
  // };

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

      {/* <Pagination
        currentPage={page}
        totalPages={Math.ceil(quantityNotices / 6)}
        onPageChange={setPage}
        paginationLength={6} // Adjust this number as per your preference
      /> */}
    </FlexBox>
  );
};

export default NoticesPage;
