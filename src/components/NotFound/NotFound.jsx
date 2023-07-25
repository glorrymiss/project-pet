import { Cat, Links, Title, Wrapper } from './NotFound.styled';
import { Background } from '../Hero/Hero.styled';
import IconPawprint1 from '../../images/icons/IconPawprint1';
/*
/**|======================================
/**| import images
/**|======================================
*/
import notfound_sm_1x from '../../images/NotFoundImages/notfound-sm@1x-1.webp';
import notfound_sm_2x from '../../images/NotFoundImages/notfound-sm@2x-2.webp';
import notfound_md_1x from '../../images/NotFoundImages/notfound-md@1x-1.webp';
import notfound_md_2x from '../../images/NotFoundImages/notfound-md@2x-2.webp';
import notfound_lg_1x from '../../images/NotFoundImages/notfound-lg@1x-1.webp';
import notfound_lg_2x from '../../images/NotFoundImages/notfound-lg@2x-2.webp';
/*
/**|======================================
/**| code
/**|======================================
*/
export const NotFound404 = () => {
  return (
    <Wrapper>
      <Background>
        <Title>
          Ooops!
          <br />
          This page not found :(
        </Title>

        <Cat
          srcSet={`${notfound_sm_1x} 280w, ${notfound_sm_2x} 560w, ${notfound_md_1x} 704w, ${notfound_md_2x} 1408w, ${notfound_lg_1x} 822w, ${notfound_lg_2x} 1644w`}
          sizes="(min-width: 1280px) 1644px, (min-width: 1280px) 822px, (min-width: 768px) 1408px, (min-width: 768px) 704px,  100vw"
          alt="not found page"
          loading="lazy"
        />

        <Links to="./">
          <span>To main page</span>
          <IconPawprint1 fill="white" />
        </Links>
      </Background>
    </Wrapper>
  );
};
