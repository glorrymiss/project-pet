import { useState } from 'react';
import { TeamPageStyled, AddInfo } from './TeamPage.styled';
import { Carousel } from 'react-3dm-carousel';
import { Background } from 'components/Hero/Hero.styled';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
/*
/**|======================================
/**| images
/**|======================================
*/
import DmytroKovach from '../../../images/Teamimages/DmytroKovach.png';
import IhorMasechko from '../../../images/Teamimages/IhorMasechko.png';
import IuriiKyrychenko from '../../../images/Teamimages/IuriiKyrychenko.png';
import KaterynaKarasevych from '../../../images/Teamimages/KaterynaKarasevych.png';
import MaksymFito from '../../../images/Teamimages/MaksymFito.png';
import MargarytaMyagkova from '../../../images/Teamimages/MargarytaMyagkova.png';
import MykhailoStryzhka from '../../../images/Teamimages/MykhailoStryzhka.png';
import NadiiaHarbuza from '../../../images/Teamimages/NadiiaHarbuza.png';
import OlenaBlahodir from '../../../images/Teamimages/OlenaBlahodir.png';
import OlhaObushchak from '../../../images/Teamimages/OlhaObushchak.png';
import YuliiaZherebetska from '../../../images/Teamimages/YuliiaZherebetska.png';

const TeamPage = () => {
  const onTitleClickHandler = card => {
    console.log('clicked card', card);
    // Check if the card has a valid routeTo URL
    if (card.routeTo) {
      // Redirect to the specified URL
      window.location.href = card.routeTo;
    }
  };
  const [selectedCardIdx, setSelectedCardIdx] = useState(0);

  const data = [
    {
      id: '1',
      title: 'Dmytro Kovach',
      description: 'Backend developer',
      image: DmytroKovach,
      tags: ['https://www.linkedin.com/in/dmytro-kovach'],
      routeTo: ['https://github.com/FreeNit'],
    },
    {
      id: '2',
      title: 'Ihor Masechko',
      description: 'Frontend developer',
      image: IhorMasechko,
      tags: ['https://www.linkedin.com/in/ihor-masechko'],
      routeTo: ['https://github.com/IhorMasechko'],
    },
    {
      id: '3',
      title: 'Iurii Kyrychenko',
      description: 'Frontend developer',
      image: IuriiKyrychenko,
      tags: ['https://www.linkedin.com/in/iurii-kyrychenko'],
      routeTo: ['https://github.com/Iuriius'],
    },
    {
      id: '4',
      title: 'Kateryna Karasevych',
      description: 'Backend developer',
      image: KaterynaKarasevych,
      tags: ['https://github.com/KaterinaKarasevich'],
      routeTo: ['https://github.com/KaterinaKarasevich'],
    },
    {
      id: '5',
      title: 'Maksym Fito',
      description: 'Frontend developer',
      image: MaksymFito,
      tags: ['https://www.linkedin.com/in/maksym-fito'],
      routeTo: ['https://github.com/Maks383'],
    },
    {
      id: '6',
      title: 'Margaryta Myagkova',
      description: 'Frontend developer',
      image: MargarytaMyagkova,
      tags: ['https://www.linkedin.com/in/margaryta-myagkova'],
      routeTo: ['https://github.com/Phoenix7778'],
    },
    {
      id: '7',
      title: 'Mykhailo Stryzhka',
      description: 'Team lead',
      image: MykhailoStryzhka,
      tags: ['https://www.linkedin.com/in/mykhailo-stryzhka'],
      routeTo: ['https://github.com/MishaStryzhka'],
    },
    {
      id: '8',
      title: 'Nadiia Harbuza',
      description: 'Frontend developer',
      image: NadiiaHarbuza,
      tags: ['https://www.linkedin.com/in/nadiia-harbuza'],
      routeTo: ['https://github.com/nadikkk'],
    },
    {
      id: '9',
      title: 'Yuliia Zherebetska',
      description: 'Scrum master',
      image: YuliiaZherebetska,
      tags: ['https://www.linkedin.com/in/yuliia-zherebetska'],
      routeTo: ['https://github.com/glorrymiss'],
    },
    {
      id: '10',
      title: 'Olha Obushchak',
      description: 'Backend developer',
      image: OlhaObushchak,
      tags: ['https://www.linkedin.com/in/olga-obushchak'],
      routeTo: ['https://github.com/oolga77'],
    },
    {
      id: '11',
      title: 'Olena Blahodir',
      description: 'Frontend developer',
      image: OlenaBlahodir,
      tags: ['https://www.linkedin.com/in/elena-blahodir'],
      routeTo: ['https://github.com/Elenalx'],
    },
  ];

  // const tagsToRender = data[selectedCardIdx]?.tags || [];

  return (
    <Background>
      <TeamPageStyled>
        <Carousel
          cardsData={data}
          setSelectedCardIdx={setSelectedCardIdx}
          rotation={true}
          rotationDuration={33}
          tilt={false}
          freeRoam={false}
          freeRoamLowerBounds={-180}
          freeRoamUpperBounds={0}
          onTitleClickHandler={onTitleClickHandler}
          startingAnimation={true}
          rotateOnScroll={true}
          drag={true}
          style={{ transform: 'scale(0.5)' }}
        />
        <AddInfo>
          {data[selectedCardIdx].tags.map(tag => (
            <p key={tag}>
              <a href={data[selectedCardIdx].tags}>
                <AiFillLinkedin />
                &nbsp; {tag}
              </a>
            </p>
          ))}
          {data[selectedCardIdx].routeTo.map(routeTo => (
            <p key={routeTo}>
              <a href={data[selectedCardIdx].routeTo}>
                <AiFillGithub />
                &nbsp; {routeTo}
              </a>
            </p>
          ))}
        </AddInfo>
      </TeamPageStyled>
    </Background>
  );
};

export default TeamPage;
