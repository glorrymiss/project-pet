import { Container } from 'components/Container/Container';
import Title from 'components/Title/Title';
import theme from 'components/theme';
import { useAuth } from 'hooks';
import { Helmet } from 'react-helmet';

const NewsPage = () => {
  const { currentTheme } = useAuth();
  return (
    <Container>
      <Helmet>
        <title>News</title>
      </Helmet>

      <Title color={theme[currentTheme].color.secondary}>News</Title>
    </Container>
  );
};

export default NewsPage;
