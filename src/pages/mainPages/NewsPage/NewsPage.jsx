import Title from 'components/Title/Title';
import theme from 'components/theme';
import { useAuth } from 'hooks';
import { Helmet } from 'react-helmet';
import { FlexBox } from '../NoticesPage/NoticesPage.styled';
import NewsList from 'components/NewsList/NewsList';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Pagination } from '../../../components/Pagination/Pagination';
import FormSearch from 'components/FormSearch/FormSearch';

const getNews = async ({ page, limit, search = '' }) => {
  const res = await axios.get(
    `api/news?search=${search}&page=${page}&limit=${limit}`
  );
  return res.data;
};

const NewsPage = () => {
  const { currentTheme } = useAuth();
  const [newsList, setNewsList] = useState([]);
  const [quantityNews, setQuantityNews] = useState(null);
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    getNews({ page, limit: 6, search: searchValue }).then(res => {
      const { quantityNews, news } = res;
      setNewsList(news);
      setQuantityNews(quantityNews);
    });
  }, [page, searchValue]);

  return (
    <FlexBox>
      <Helmet>
        <title>News</title>
      </Helmet>

      <Title color={theme[currentTheme].color.secondary}>News</Title>

      <FormSearch setSearchValue={setSearchValue} />

      <NewsList newsList={newsList} />

      <Pagination
        currentPage={page}
        totalPages={Math.ceil(quantityNews / 6)}
        onPageChange={setPage}
        paginationLength={5} // Adjust this number as per your preference
      />
    </FlexBox>
  );
};

export default NewsPage;
