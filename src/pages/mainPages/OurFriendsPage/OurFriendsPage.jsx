import { Container } from 'components/Container/Container';
import Title from 'components/Title/Title';
import theme from 'components/theme';
import { useAuth } from 'hooks';
import { Helmet } from 'react-helmet';

const OurFriendsPage = () => {
  const { currentTheme } = useAuth();
  return (
    <Container>
      <Helmet>
        <title>Our Friends</title>
      </Helmet>

      <Title color={theme[currentTheme].color.secondary}>Our Friends</Title>
    </Container>
  );
};

export default OurFriendsPage;
