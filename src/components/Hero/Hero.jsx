import { HeroTitle, Cat1, Dog1, Dog2, Background } from './Hero.styled';
/*
/**|======================================
/**| pictures
/**|======================================
*/
import cat_sm_1x from '../../images/MainPageImages/cat_sm@1x.webp';
import cat_sm_2x from '../../images/MainPageImages/cat_sm@2x.webp';
import cat_md_bg_1x from '../../images/MainPageImages/cat_md_bg@1x.webp';
import cat_md_bg_2x from '../../images/MainPageImages/cat_md_bg@2x.webp';

import dog1_sm_1x from '../../images/MainPageImages/dog1_sm@1x.webp';
import dog1_sm_2x from '../../images/MainPageImages/dog1_sm@2x.webp';
import dog1_md_bg_1x from '../../images/MainPageImages/dog1_md_bg@1x.webp';
import dog1_md_bg_2x from '../../images/MainPageImages/dog1_md_bg@2x.webp';

import dog2_sm_1x from '../../images/MainPageImages/dog2_sm@1x.webp';
import dog2_sm_2x from '../../images/MainPageImages/dog2_sm@2x.webp';
import dog2_md_bg_1x from '../../images/MainPageImages/dog2_md_bg@1x.webp';
import dog2_md_bg_2x from '../../images/MainPageImages/dog2_md_bg@2x.webp';
/*
/**|======================================
/**| code
/**|======================================
*/
export const Hero = () => {
  return (
    <>

      <Background>
        <HeroTitle>Take good care of your small pets</HeroTitle>
        <Cat1
          srcSet={`${cat_sm_1x} 219w, ${cat_sm_2x} 437w , ${cat_md_bg_1x} 454w, ${cat_md_bg_2x} 907w`}
          src={cat_sm_1x}
          alt="cat"
          loading="lazy"
          sizes="(max-width: 767px) 219px, (max-width: 767px) 437px, (min-width: 768px) 454px, (min-width: 768px) 907px, 100vw"
        />
        <Dog1
          srcSet={`${dog1_sm_1x} 299w, ${dog1_sm_2x} 597w , ${dog1_md_bg_1x} 729w, ${dog1_md_bg_2x} 1457w`}
          src={dog1_sm_1x}
          alt="dog"
          loading="lazy"
          sizes="(max-width: 767px) 299px, (max-width: 767px) 597px, (min-width: 768px) 729px, (min-width: 768px) 1457px, 100vw"
        />
        <Dog2
          srcSet={`${dog2_sm_1x} 289w, ${dog2_sm_2x} 576w , ${dog2_md_bg_1x} 597w, ${dog2_md_bg_2x} 1194w`}
          src={dog2_sm_1x}
          alt="dog2"
          loading="lazy"
          sizes="(max-width: 767px) 289px, (max-width: 767px) 576px, (min-width: 768px) 597px, (min-width: 768px) 1194px, 100vw"
        />
      </Background>
    </>
  );
};
