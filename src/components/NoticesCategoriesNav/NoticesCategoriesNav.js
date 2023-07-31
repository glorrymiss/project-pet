import { useAuth } from 'hooks';
import { BtnNavLink, ContainerNav } from './NoticesCategoriesNav.styled';

const NoticesCategoriesNav = ({ notices }) => {
  const { isLoggedIn } = useAuth();
  return (
    <ContainerNav>
      <BtnNavLink to="sell" state={{ notices }}>
        sell
      </BtnNavLink>
      <BtnNavLink to="lost-found" state={{ notices }}>
        lost/found
      </BtnNavLink>
      <BtnNavLink to="for-free" state={{ notices }}>
        in good hands
      </BtnNavLink>
      {isLoggedIn && (
        <BtnNavLink to="favorite" state={{ notices }}>
          favorite ads
        </BtnNavLink>
      )}
      {isLoggedIn && (
        <BtnNavLink to="own" state={{ notices }}>
          my ads
        </BtnNavLink>
      )}
    </ContainerNav>
  );
};

export default NoticesCategoriesNav;
