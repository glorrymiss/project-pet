// import Btn from 'components/Btn/Btn';
// import { Container } from 'components/Container/Container';
import Filter from 'components/Filter/Filter';
import FormSearch from 'components/FormSearch/FormSearch';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import { Pagination } from 'components/Pagination/Pagination';
import Title from 'components/Title/Title';
import theme from 'components/theme';
import { useAuth } from 'hooks';
import { Helmet } from 'react-helmet';
import { Outlet, useParams } from 'react-router-dom';
import {
  BtnAddPet,
  FiltersContainer,
  FlexBox,
  WrapperFilter,
} from './NoticesPage.styled';
import { useEffect, useState } from 'react';
import IconPlus from 'images/icons/IconPlus';

const getNotices = async ({ page, limit, search = '', categoryName }) => {
  // const res = await axios.get(
  //   `api/news?category=${categoryName}&search=${search}&page=${page}&limit=${limit}`
  // );
  return { quantityNotices: 0, notices: [] };
};

const NoticesPage = () => {
  const { currentTheme } = useAuth();
  const [noticesList, setNoticesList] = useState([]);
  const [quantityNotices, setQuantityNotices] = useState(0);
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const { categoryName } = useParams();

  useEffect(() => {
    setPage(1);
    getNotices({ page, limit: 12, search: searchValue, categoryName }).then(
      res => {
        const { quantityNotices, notices } = res;
        setNoticesList(notices);
        setQuantityNotices(quantityNotices);
      }
    );
  }, [page, searchValue, categoryName]);

  return (
    <FlexBox>
      <Helmet>
        <title>Find pet</title>
      </Helmet>

      <Title color={theme[currentTheme].color.secondary}>
        Find your favorite pet
      </Title>

      <FormSearch setSearchValue={setSearchValue} />

      <FiltersContainer>
        <NoticesCategoriesNav notices={noticesList} />
        <WrapperFilter>
          <Filter />
          <BtnAddPet to="/add-pet">
            Add Pet <IconPlus fill={theme[currentTheme].color.bodyColor} />
          </BtnAddPet>
        </WrapperFilter>
      </FiltersContainer>

      <Outlet />

      <Pagination
        currentPage={page}
        totalPages={Math.ceil(quantityNotices / 6)}
        onPageChange={setPage}
        paginationLength={6} // Adjust this number as per your preference
      />
    </FlexBox>
  );
};

export default NoticesPage;
