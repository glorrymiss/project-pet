// import { Container } from 'components/Container/Container';
import Title from 'components/Title/Title';
import theme from 'components/theme';
import { useAuth } from 'hooks';
import { Helmet } from 'react-helmet';
import { FlexBox } from '../NoticesPage/NoticesPage.styled';
import Pagination from 'components/Pagination/Pagination';
import NewsList from 'components/NewsList/NewsList';

const NewsPage = () => {
  const { currentTheme } = useAuth();
  return (
    <FlexBox>
      <Helmet>
        <title>News</title>
      </Helmet>

      <Title color={theme[currentTheme].color.secondary}>News</Title>

      <NewsList />

      <Pagination />
    </FlexBox>
  );
};

export default NewsPage;
