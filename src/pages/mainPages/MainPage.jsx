import { useState, useEffect } from 'react';
import { Hero } from '../../components/Hero/Hero';
import { Footer } from '../../components/Footer/Footer';
import Loader from '../../components/Loader/Loader';
import { Background, Wrapper } from '../../components/Hero/Hero.styled';
import { WrapLoader } from 'components/Loader/WrapLoader';

const MainPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <WrapLoader>
          <Loader />
        </WrapLoader>
      ) : (
        <Wrapper>
          <Hero />
          <Footer />
        </Wrapper>
      )}
    </>
  );
};

export default MainPage;
