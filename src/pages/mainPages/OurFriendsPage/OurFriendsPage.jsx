
import OurFriends from 'components/OurFriends/OurFriends';
import Title from 'components/Title/Title';
import theme from 'components/theme';
import { useAuth } from 'hooks';
import { Helmet } from 'react-helmet';

const OurFriendsPage = () => {
  const { currentTheme } = useAuth();
  return (
    <>
      <Helmet>
        <title>Our Friends</title>
      </Helmet>

      <Title color={theme[currentTheme].color.secondary}>Our Friends</Title>
      <OurFriends/>
    </>
  );
};

export default OurFriendsPage;
