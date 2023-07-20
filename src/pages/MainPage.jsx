import { Hero } from '../components/Hero/Hero';
import { Section } from '../components/Section/Section';
import { Container } from '../components/Container/Container';

const MainPage = () => {
  return (
    <Section>
      <Container>
        <Hero />
      </Container>
    </Section>
  );
};

export default MainPage;
