// import { Container } from 'components/Container/Container';
import Title from 'components/Title/Title';
import theme from 'components/theme';
import { useAuth } from 'hooks';
import { Helmet } from 'react-helmet';
import { FlexBox } from '../NoticesPage/NoticesPage.styled';
import Pagination from 'components/Pagination/Pagination';
import NewsList from 'components/NewsList/NewsList';
import FormSearch from 'components/FormSearch/FormSearch';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const getNews = async page => {
  const res = await axios.get('api/news', { page: page });
  return res.data;
};

const NewsPage = () => {
  const { currentTheme } = useAuth();
  const [newsList, setNewsList] = useState([]);
  const [quantityNews, setQuantityNews] = useState(0);
  const [page, setPage] = useState(1);
  // console.log('quantityNews', quantityNews);
  console.log('page', page);

  useEffect(() => {
    getNews(page).then(res => {
      const { quantityNews, news } = res;
      setNewsList(news);
      setQuantityNews(quantityNews);
    });
  }, [page]);

  return (
    <FlexBox>
      <Helmet>
        <title>News</title>
      </Helmet>

      <Title color={theme[currentTheme].color.secondary}>News</Title>

      <FormSearch />

      <NewsList newsList={newsList} />

      <Pagination page={page} setPage={setPage} quantity={quantityNews} />
    </FlexBox>
  );
};

export default NewsPage;
