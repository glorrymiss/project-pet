import Title from 'components/Title/Title';
import theme from 'components/theme';
import { useAuth } from 'hooks';
import { Helmet } from 'react-helmet';
import { FlexBox } from '../NoticesPage/NoticesPage.styled';
import NewsList from 'components/NewsList/NewsList';
import { useEffect, useState } from 'react';
import { Pagination } from '../../../components/Pagination/Pagination';
import FormSearch from 'components/FormSearch/FormSearch';
import { Cat } from 'components/NotFound/NotFound.styled';
import { useSearchParams } from 'react-router-dom';
import { getNews } from 'services/news';
/*
/**|======================================
/**| import images
/**|======================================
*/
import notfound_sm_1x from 'images/NotFoundImages/notfound-sm@1x-1.webp';
import notfound_sm_2x from 'images/NotFoundImages/notfound-sm@2x-2.webp';
import notfound_md_1x from 'images/NotFoundImages/notfound-md@1x-1.webp';
import notfound_md_2x from 'images/NotFoundImages/notfound-md@2x-2.webp';
import notfound_lg_1x from 'images/NotFoundImages/notfound-lg@1x-1.webp';
import notfound_lg_2x from 'images/NotFoundImages/notfound-lg@2x-2.webp';

const NewsPage = () => {
  const [error, setError] = useState(null);
  const { currentTheme } = useAuth();
  const [newsList, setNewsList] = useState([]);
  const [quantityNews, setQuantityNews] = useState(null);
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  if (null) {
    setSearchParams(null);
  }

  useEffect(() => {
    if (newsList.length === 0) {
      setError(true);
    }
  }, [newsList]);

  useEffect(() => {
    setError(null);
    getNews({ page, limit: 6, query: query || '' })
      .then(res => {
        const { quantityNews, news } = res;
        setNewsList(news);
        setQuantityNews(quantityNews);
      })
      .catch(error => setError(error));
  }, [page, query]);

  return (
    <FlexBox>
      <Helmet>
        <title>News</title>
      </Helmet>

      <Title color={theme[currentTheme].color.secondary}>News</Title>

      <FormSearch />

      {error && (
        <>
          <Title>Ooops! Nothing found :(</Title>

          <Cat
            srcSet={`${notfound_sm_1x} 280w, ${notfound_sm_2x} 560w, ${notfound_md_1x} 704w, ${notfound_md_2x} 1408w, ${notfound_lg_1x} 822w, ${notfound_lg_2x} 1644w`}
            sizes="(min-width: 1280px) 1644px, (min-width: 1280px) 822px, (min-width: 768px) 1408px, (min-width: 768px) 704px,  100vw"
            alt="not found page"
            loading="lazy"
          />
        </>
      )}

      {!error && <NewsList newsList={newsList} />}

      {!error && (
        <Pagination
          currentPage={page}
          totalPages={Math.ceil(quantityNews / 6)}
          onPageChange={setPage}
          paginationLength={6} // Adjust this number as per your preference
        />
      )}
    </FlexBox>
  );
};

export default NewsPage;
