import { useState } from 'react';
import { TeamPageStyled } from './TeamPage.styled';
import { Carousel } from 'react-3dm-carousel';
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
  };
  const [selectedCardIdx, setSelectedCardIdx] = useState(0);

  const data = [
    {
      id: '1',
      title: 'Dmytro Kovach',
      description: 'This is the content of card 1.',
      image: DmytroKovach,
      tags: ['Link'],
      routeTo: 'https://github.com/Iuriius',
    },
    {
      id: '2',
      title: 'Ihor Masechko',
      description: 'This is the content of card 2.',
      image: IhorMasechko,
      tags: ['Link'],
      routeTo: 'https://github.com/Iuriius',
    },
    {
      id: '3',
      title: 'Iurii Kyrychenko',
      description: 'This is the content of card 3.',
      image: IuriiKyrychenko,
      tags: ['Link'],
      routeTo: 'https://github.com/Iuriius',
    },
    {
      id: '4',
      title: 'Kateryna Karasevych',
      description: 'This is the content of card 4.',
      image: KaterynaKarasevych,
      tags: ['Link'],
      routeTo: 'https://github.com/Iuriius',
    },
    {
      id: '5',
      title: 'Maksym   Fito',
      description: 'This is the content of card 5.',
      image: MaksymFito,
      tags: ['Link'],
      routeTo: 'https://github.com/Iuriius',
    },
    {
      id: '6',
      title: 'Margaryta Myagkova',
      description: 'This is the content of card 6.',
      image: MargarytaMyagkova,
      tags: ['Link'],
      routeTo: 'https://github.com/Iuriius',
    },
    {
      id: '7',
      title: 'Mykhailo Stryzhka',
      description: 'This is the content of card 7.',
      image: MykhailoStryzhka,
      tags: ['Link'],
      routeTo: 'https://github.com/Iuriius',
    },
    {
      id: '8',
      title: 'Nadiia Harbuza',
      description: 'This is the content of card 8.',
      image: NadiiaHarbuza,
      tags: ['Link'],
      routeTo: 'https://github.com/Iuriius',
    },
    {
      id: '9',
      title: 'Olena Blahodir',
      description: 'This is the content of card 9.',
      image: OlenaBlahodir,
      tags: ['Link'],
      routeTo: 'https://github.com/Iuriius',
    },
    {
      id: '10',
      title: 'Olha Obushchak',
      description: 'This is the content of card 10.',
      image: OlhaObushchak,
      tags: ['Link'],
      routeTo: 'https://github.com/Iuriius',
    },
    {
      id: '11',
      title: 'Yuliia Zherebetska',
      description: 'This is the content of card 11.',
      image: YuliiaZherebetska,
      tags: ['Link'],
      routeTo: 'https://github.com/Iuriius',
    },
  ];

  // const tagsToRender = data[selectedCardIdx]?.tags || [];

  return (
    <TeamPageStyled>
      <Carousel
        cardsData={data}
        setSelectedCardIdx={setSelectedCardIdx}
        rotation={true}
        rotationDuration={60}
        tilt={false}
        freeRoam={false}
        freeRoamLowerBounds={-180}
        freeRoamUpperBounds={0}
        onTitleClickHandler={onTitleClickHandler}
        startingAnimation={true}
        rotateOnScroll={true}
        drag={true}
        style={{ width: '100vw', height: '100vh' }}
      />
    </TeamPageStyled>
  );
};

export default TeamPage;
