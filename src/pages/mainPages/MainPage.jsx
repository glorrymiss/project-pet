import { useState, useEffect } from 'react';
import { Hero } from '../../components/Hero/Hero';
import { Footer } from '../../components/Footer/Footer';
import Loader from '../../components/Loader/Loader';
import { Background } from '../../components/Hero/Hero.styled';

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
        <Background>
          <Loader />
        </Background>
      ) : (
        <>
          <Hero />
          <Footer />
        </>
      )}
    </>
  );
};

export default MainPage;
