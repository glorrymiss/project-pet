import Btn from 'components/Btn/Btn';
// import { Container } from 'components/Container/Container';
import Filter from 'components/Filter/Filter';
import FormSearch from 'components/FormSearch/FormSearch';
import NoticesCategoriesNav from 'components/NoticesCategoriesNav/NoticesCategoriesNav';
import Pagination from 'components/Pagination/Pagination';
import Title from 'components/Title/Title';
import theme from 'components/theme';
import { useAuth } from 'hooks';
import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router-dom';
import { FlexBox } from './NoticesPage.styled';
import { useEffect, useState } from 'react';

const getNotices = async page => {
  // const res = await axios.get('api/news', { page: page });
  // return res.data;
};

const NoticesPage = () => {
  const { currentTheme } = useAuth();
  const [noticesList, setNoticesList] = useState([]);
  const [quantityNews, setQuantityNews] = useState(0);
  const [page, setPage] = useState(1);
  console.log('noticesList', noticesList);

  useEffect(() => {
    setPage(1);
    getNotices(page).then(res => {
      const { quantityNews, news } = res;
      setNoticesList(news);
      setQuantityNews(quantityNews);
    });
  }, [page]);

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

      <Pagination page={page} setPage={setPage} quantity={quantityNews} />
    </FlexBox>
  );
};

export default NoticesPage;
